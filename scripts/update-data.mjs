// Refreshes form stats in teams-data.js from live international results
// using the API-Football free tier (api-football.com).
//
// Usage:  API_FOOTBALL_KEY=your_key node scripts/update-data.mjs
//
// Only form.wins/draws/losses/goalsFor/goalsAgainst and DATA_UPDATED
// are touched; subjective fields (preparation, tactics, notes) stay manual.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const BASE = "https://v3.football.api-sports.io";
const KEY  = process.env.API_FOOTBALL_KEY;
if (!KEY) {
  console.error("Missing API_FOOTBALL_KEY environment variable.");
  process.exit(1);
}

const DATA_FILE = join(dirname(fileURLToPath(import.meta.url)), "..", "teams-data.js");

// Map our 3-letter keys to API-Football team IDs for national teams.
// Full list: https://v3.football.api-sports.io/teams?type=National
const TEAM_IDS = {
  ARG:  26,  BRA:   6,  URU:  32,  COL:  20,  ECU: 130,  PAR:  27,
  ESP:   9,  FRA:   2,  GER:  25,  ENG:  10,  POR: 629,  NED:   8,
  BEL:   1,  CRO:   3,  TUR:  21,  AUT: 775,  SUI:  15,  SCO:  1108,
  CZE: 770,  BIH: 792,  NOR:  23,  SWE:  14,
  ALG: 113,  MAR: 116,  SEN: 105,  EGY: 101,  GHA: 111,  CIV: 108,
  RSA: 119,  COD: 1568, TUN: 117,  CPV: 122,
  JPN:  21,  KOR: 149,  IRN: 281,  AUS:  25,  KSA: 152,  IRQ: 284,
  JOR: 340,  UZB: 122,  QAT: 161,
  USA: 634,  MEX:  16,  CAN: 736,  PAN: 706,  HTI: 503,  CUW: 1403,
  NZL: 134,
};

async function api(path) {
  const url = BASE + path;
  const res = await fetch(url, {
    headers: { "x-apisports-key": KEY }
  });
  if (!res.ok) throw new Error(`${path} -> HTTP ${res.status}`);
  const json = await res.json();
  if (json.errors && Object.keys(json.errors).length) {
    throw new Error(`API error on ${path}: ${JSON.stringify(json.errors)}`);
  }
  return json;
}

// Free tier supports ?team + ?season but not ?last.
// Fetch two seasons to get enough finished matches.
async function fetchFinished(teamId) {
  const currentYear = new Date().getFullYear();
  const seasons = [currentYear, currentYear - 1];
  const all = [];
  for (const season of seasons) {
    const data = await api(`/fixtures?team=${teamId}&season=${season}&status=FT`);
    all.push(...(data.response ?? []));
    await new Promise(r => setTimeout(r, 250));
  }
  // Sort descending by date and keep most recent 20
  all.sort((a, b) => new Date(b.fixture.date) - new Date(a.fixture.date));
  return all.slice(0, 20);
}

function computeForm(fixtures, teamId) {
  const f = { wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0 };
  for (const fx of fixtures) {
    const home = fx.teams.home.id === teamId;
    const gf = home ? fx.goals.home : fx.goals.away;
    const ga = home ? fx.goals.away : fx.goals.home;
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

let updated = src;
let count = 0;

for (const key of teamKeys) {
  const id = TEAM_IDS[key];
  if (!id) {
    console.warn(`No API-Football ID mapped for ${key} — skipping`);
    continue;
  }

  let fixtures;
  try {
    fixtures = await fetchFinished(id);
  } catch (err) {
    console.warn(`${key}: fetch failed — ${err.message}`);
    continue;
  }

  if (fixtures.length < 5) {
    console.warn(`${key}: only ${fixtures.length} results found — skipping`);
    continue;
  }

  const f = computeForm(fixtures, id);
  const total = f.wins + f.draws + f.losses;
  if (total < 5) {
    console.warn(`${key}: only ${total} scoreable matches — skipping`);
    continue;
  }

  updated = updated.replace(
    new RegExp(
      `(  ${key}: \\{[\\s\\S]*?form: \\{ )wins: \\d+, draws: \\d+, losses: \\d+, goalsFor: \\d+, goalsAgainst: \\d+`
    ),
    `$1wins: ${f.wins}, draws: ${f.draws}, losses: ${f.losses}, goalsFor: ${f.goalsFor}, goalsAgainst: ${f.goalsAgainst}`
  );
  count++;
  console.log(`${key}: ${f.wins}W ${f.draws}D ${f.losses}L  GF:${f.goalsFor} GA:${f.goalsAgainst}`);
}

const today = new Date().toISOString().slice(0, 10);
updated = updated.replace(
  /const DATA_UPDATED = "[^"]*";/,
  `const DATA_UPDATED = "${today}";`
);

writeFileSync(DATA_FILE, updated);
console.log(`\nDone. Updated ${count}/${teamKeys.length} teams. DATA_UPDATED=${today}`);
