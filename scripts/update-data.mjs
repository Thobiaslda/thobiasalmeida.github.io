// Refreshes form stats in teams-data.js from live match results
// using the football-data.org API (free tier).
//
// Usage:  FOOTBALL_DATA_KEY=your_key node scripts/update-data.mjs
//
// Only form.wins/draws/losses/goalsFor/goalsAgainst and DATA_UPDATED
// are touched; subjective fields (preparation, tactics, notes...) are
// preserved for manual curation.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const API = "https://api.football-data.org/v4";
const KEY = process.env.FOOTBALL_DATA_KEY;
if (!KEY) {
  console.error("Missing FOOTBALL_DATA_KEY environment variable.");
  process.exit(1);
}

const DATA_FILE = join(dirname(fileURLToPath(import.meta.url)), "..", "teams-data.js");

// football-data.org TLA codes occasionally differ from ours
const TLA_ALIASES = { ALG: "ALG", RSA: "RSA", KSA: "KSA" };

async function api(path) {
  const res = await fetch(API + path, { headers: { "X-Auth-Token": KEY } });
  if (res.status === 429) {
    // free tier: 10 requests/minute — wait and retry
    await new Promise(r => setTimeout(r, 61000));
    return api(path);
  }
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  return res.json();
}

function computeForm(matches, teamId) {
  const f = { wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 };
  for (const m of matches) {
    const home = m.homeTeam.id === teamId;
    const gf = home ? m.score.fullTime.home : m.score.fullTime.away;
    const ga = home ? m.score.fullTime.away : m.score.fullTime.home;
    if (gf == null || ga == null) continue;
    f.goalsFor += gf;
    f.goalsAgainst += ga;
    if (gf > ga) f.wins++;
    else if (gf === ga) f.draws++;
    else f.losses++;
  }
  return f;
}

const src = readFileSync(DATA_FILE, "utf8");
const teamKeys = [...src.matchAll(/^  ([A-Z]{2,3}): \{/gm)].map(m => m[1]);
console.log(`Found ${teamKeys.length} teams in teams-data.js`);

// Map our keys to football-data team IDs via the WC competition roster
const comp = await api("/competitions/WC/teams");
const idByTla = {};
for (const t of comp.teams) idByTla[t.tla] = t.id;

let updated = src;
let count = 0;

for (const key of teamKeys) {
  const tla = TLA_ALIASES[key] || key;
  const id = idByTla[tla];
  if (!id) {
    console.warn(`No football-data ID for ${key} — skipping`);
    continue;
  }
  const data = await api(`/teams/${id}/matches?status=FINISHED&limit=20`);
  const f = computeForm(data.matches, id);
  const total = f.wins + f.draws + f.losses;
  if (total < 10) {
    console.warn(`${key}: only ${total} finished matches — skipping`);
    continue;
  }
  updated = updated.replace(
    new RegExp(`(  ${key}: \\{[\\s\\S]*?form: \\{ )wins: \\d+, draws: \\d+, losses: \\d+, goalsFor: \\d+, goalsAgainst: \\d+`),
    `$1wins: ${f.wins}, draws: ${f.draws}, losses: ${f.losses}, goalsFor: ${f.goalsFor}, goalsAgainst: ${f.goalsAgainst}`
  );
  count++;
  console.log(`${key}: ${f.wins}W ${f.draws}D ${f.losses}L  ${f.goalsFor}-${f.goalsAgainst}`);
}

const today = new Date().toISOString().slice(0, 10);
updated = updated.replace(/const DATA_UPDATED = "[^"]*";/, `const DATA_UPDATED = "${today}";`);

writeFileSync(DATA_FILE, updated);
console.log(`Done. Updated form for ${count}/${teamKeys.length} teams. DATA_UPDATED=${today}`);
