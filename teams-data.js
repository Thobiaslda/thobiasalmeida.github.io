// ============================================================
// WC2026 TEAM DATA — auto-updatable. Edit manually or run
// scripts/update-data.mjs to refresh form stats from live results.
// ============================================================
const DATA_UPDATED = "2026-06-29";
// ============================================================
// TEAM DATA — Edit this block to keep predictions up to date.
// Keys are 3-letter codes. All scores are 0-100.
//
// form: last 20 games stats
// preparation: squad health, morale, controversies (100 = perfect)
// tactics: tactical flexibility and primary system
// coaching: coach quality and experience score
// squad: avg age, int'l experience, club career level, trophy pedigree
// climate: temperate | tropical | cold | mediterranean | arid
// ============================================================
const TEAMS = {

  // ── CONMEBOL ──────────────────────────────────────────────
  ARG: {
    name: "Argentina", flag: "🇦🇷", confederation: "CONMEBOL", fifaRank: 1, climate: "temperate",
    form: { wins: 14, draws: 4, losses: 2, goalsFor: 40, goalsAgainst: 13, avgPossession: 54, avgShotsOnTarget: 6.2, avgPassAccuracy: 87, avgTacklesWon: 22, strengthOfSchedule: 80 },
    preparation: { score: 85, notes: "Cohesive unit, minor midfield injury concerns. Strong morale as reigning champions." },
    tactics: { flexibility: 88, primarySystem: "4-3-3 / 4-2-3-1", notes: "Scaloni rotates fluidly between systems. Deep versatile squad can adapt mid-game." },
    coaching: { score: 84, name: "Lionel Scaloni", trophiesWon: 3 },
    squad: { avgAge: 28.5, experienceScore: 93, careerLevel: 91, trophyScore: 93 },
    notes: "Reigning World Cup and Copa América champions. Peak generation still intact."
  },
  BRA: {
    name: "Brazil", flag: "🇧🇷", confederation: "CONMEBOL", fifaRank: 4, climate: "tropical",
    form: { wins: 12, draws: 5, losses: 3, goalsFor: 34, goalsAgainst: 16, avgPossession: 56, avgShotsOnTarget: 5.9, avgPassAccuracy: 85, avgTacklesWon: 20, strengthOfSchedule: 75 },
    preparation: { score: 78, notes: "Rebuilding post-2022. New generation emerging but cohesion still developing." },
    tactics: { flexibility: 82, primarySystem: "4-2-3-1 / 4-4-2", notes: "Technically gifted. Attacking depth is outstanding; defensive shape improved." },
    coaching: { score: 76, name: "Dorival Jr.", trophiesWon: 1 },
    squad: { avgAge: 27.2, experienceScore: 88, careerLevel: 89, trophyScore: 86 },
    notes: "5-time champions hungry to reclaim glory. Young attack full of Champions League talent."
  },
  URU: {
    name: "Uruguay", flag: "🇺🇾", confederation: "CONMEBOL", fifaRank: 17, climate: "temperate",
    form: { wins: 10, draws: 6, losses: 4, goalsFor: 26, goalsAgainst: 18, avgPossession: 48, avgShotsOnTarget: 4.5, avgPassAccuracy: 80, avgTacklesWon: 24, strengthOfSchedule: 68 },
    preparation: { score: 80, notes: "Organized and disciplined. Bielsa philosophy instilled. Minor absences manageable." },
    tactics: { flexibility: 75, primarySystem: "4-4-2 / 3-5-2", notes: "High-press, intense transitions. Tactically disciplined and hard to beat." },
    coaching: { score: 88, name: "Marcelo Bielsa", trophiesWon: 5 },
    squad: { avgAge: 27.8, experienceScore: 82, careerLevel: 80, trophyScore: 72 },
    notes: "Compact, combative. Overperforms relative to squad size. Bielsa elevates every player."
  },
  COL: {
    name: "Colombia", flag: "🇨🇴", confederation: "CONMEBOL", fifaRank: 13, climate: "tropical",
    form: { wins: 12, draws: 5, losses: 3, goalsFor: 32, goalsAgainst: 14, avgPossession: 52, avgShotsOnTarget: 5.5, avgPassAccuracy: 83, avgTacklesWon: 21, strengthOfSchedule: 70 },
    preparation: { score: 82, notes: "Strong Copa América run boosted morale. Squad depth good, few injuries." },
    tactics: { flexibility: 80, primarySystem: "4-3-3", notes: "Direct, pacey. Luiz Díaz and Cuadrado provide width. Can press high or sit deep." },
    coaching: { score: 74, name: "Néstor Lorenzo", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 80, careerLevel: 83, trophyScore: 65 },
    notes: "Dark horse. Premier League–heavy squad with pace up front. Best generation in years."
  },
  ECU: {
    name: "Ecuador", flag: "🇪🇨", confederation: "CONMEBOL", fifaRank: 24, climate: "tropical",
    form: { wins: 9, draws: 5, losses: 6, goalsFor: 24, goalsAgainst: 22, avgPossession: 47, avgShotsOnTarget: 4.2, avgPassAccuracy: 77, avgTacklesWon: 23, strengthOfSchedule: 62 },
    preparation: { score: 74, notes: "Young squad, improving. Some growing pains but attitude is positive." },
    tactics: { flexibility: 65, primarySystem: "4-3-3", notes: "Energetic pressing, direct play. Limited tactical variation." },
    coaching: { score: 68, name: "Sebastián Beccacece", trophiesWon: 0 },
    squad: { avgAge: 25.8, experienceScore: 65, careerLevel: 70, trophyScore: 42 },
    notes: "Young and hungry. Altitude at home helps; will need to adapt to WC venues."
  },
  PAR: {
    name: "Paraguay", flag: "🇵🇾", confederation: "CONMEBOL", fifaRank: 52, climate: "tropical",
    form: { wins: 9, draws: 5, losses: 6, goalsFor: 24, goalsAgainst: 20, avgPossession: 47, avgShotsOnTarget: 4.0, avgPassAccuracy: 77, avgTacklesWon: 23, strengthOfSchedule: 62 },
    preparation: { score: 73, notes: "Solid qualifying campaign. Almiron leads a motivated group. Good defensive organization." },
    tactics: { flexibility: 68, primarySystem: "4-4-2 / 4-3-3", notes: "Hard-working and physically strong. Difficult to break down. Counter-attack threat." },
    coaching: { score: 68, name: "Gustavo Alfaro", trophiesWon: 0 },
    squad: { avgAge: 27.2, experienceScore: 68, careerLevel: 72, trophyScore: 50 },
    notes: "Almiron and Sanabria the dangermen. Defensively disciplined. Dark horse in the group stage."
  },

  // ── UEFA ──────────────────────────────────────────────────
  ESP: {
    name: "Spain", flag: "🇪🇸", confederation: "UEFA", fifaRank: 5, climate: "mediterranean",
    form: { wins: 15, draws: 3, losses: 2, goalsFor: 42, goalsAgainst: 12, avgPossession: 62, avgShotsOnTarget: 6.5, avgPassAccuracy: 90, avgTacklesWon: 20, strengthOfSchedule: 82 },
    preparation: { score: 88, notes: "Euro 2024 winners, strong unity. Yamal, Pedri generation at peak. Minimal injury concerns." },
    tactics: { flexibility: 90, primarySystem: "4-3-3 / 4-2-3-1", notes: "Positional play mastery. Can press high or control possession. Excellent from any system." },
    coaching: { score: 86, name: "Luis de la Fuente", trophiesWon: 2 },
    squad: { avgAge: 26.5, experienceScore: 88, careerLevel: 92, trophyScore: 90 },
    notes: "Euro 2024 champions. Lamine Yamal-led generation in full bloom."
  },
  FRA: {
    name: "France", flag: "🇫🇷", confederation: "UEFA", fifaRank: 2, climate: "temperate",
    form: { wins: 14, draws: 3, losses: 3, goalsFor: 38, goalsAgainst: 14, avgPossession: 55, avgShotsOnTarget: 6.0, avgPassAccuracy: 87, avgTacklesWon: 21, strengthOfSchedule: 84 },
    preparation: { score: 84, notes: "Mbappe leading a multi-generational squad. Some internal tension managed, overall solid." },
    tactics: { flexibility: 85, primarySystem: "4-3-3 / 4-2-3-1", notes: "Athletic and direct with elite pace. Can dominate possession or transition rapidly." },
    coaching: { score: 82, name: "Didier Deschamps", trophiesWon: 4 },
    squad: { avgAge: 27.2, experienceScore: 91, careerLevel: 93, trophyScore: 90 },
    notes: "Stacked roster across every position. Mbappe, Camavinga, Tchouaméni still in primes."
  },
  GER: {
    name: "Germany", flag: "🇩🇪", confederation: "UEFA", fifaRank: 12, climate: "temperate",
    form: { wins: 11, draws: 5, losses: 4, goalsFor: 30, goalsAgainst: 20, avgPossession: 56, avgShotsOnTarget: 5.6, avgPassAccuracy: 86, avgTacklesWon: 21, strengthOfSchedule: 78 },
    preparation: { score: 80, notes: "Rebuild under Nagelsmann bearing fruit. Younger generation with Musiala/Wirtz clicking." },
    tactics: { flexibility: 83, primarySystem: "4-2-3-1 / 3-4-3", notes: "Traditional German efficiency revamped with modern pressing. Versatile and improving." },
    coaching: { score: 80, name: "Julian Nagelsmann", trophiesWon: 1 },
    squad: { avgAge: 26.8, experienceScore: 84, careerLevel: 88, trophyScore: 82 },
    notes: "Hosts of Euro 2024 reignited belief. Musiala and Wirtz potentially best midfield pair in tournament."
  },
  ENG: {
    name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", confederation: "UEFA", fifaRank: 3, climate: "cold",
    form: { wins: 12, draws: 5, losses: 3, goalsFor: 34, goalsAgainst: 15, avgPossession: 53, avgShotsOnTarget: 5.8, avgPassAccuracy: 85, avgTacklesWon: 22, strengthOfSchedule: 80 },
    preparation: { score: 82, notes: "Experienced squad. Renewed energy under new manager post-Southgate. Bellingham leading." },
    tactics: { flexibility: 80, primarySystem: "4-3-3 / 4-2-3-1", notes: "Physical and direct. Improving positional play. Clinical on the counter." },
    coaching: { score: 78, name: "Lee Carsley", trophiesWon: 0 },
    squad: { avgAge: 27.0, experienceScore: 87, careerLevel: 90, trophyScore: 78 },
    notes: "Decades of hurt fueling ambition. Bellingham, Saka, Foden: one of the world's best attacking trios."
  },
  POR: {
    name: "Portugal", flag: "🇵🇹", confederation: "UEFA", fifaRank: 6, climate: "mediterranean",
    form: { wins: 13, draws: 4, losses: 3, goalsFor: 37, goalsAgainst: 16, avgPossession: 54, avgShotsOnTarget: 6.0, avgPassAccuracy: 85, avgTacklesWon: 21, strengthOfSchedule: 76 },
    preparation: { score: 80, notes: "Transitioning beyond Ronaldo era. Silva, Felix, Leão generation stepping up well." },
    tactics: { flexibility: 82, primarySystem: "4-2-3-1 / 4-3-3", notes: "Creative and attacking with elite winger options. Can adapt to opponent." },
    coaching: { score: 79, name: "Roberto Martínez", trophiesWon: 1 },
    squad: { avgAge: 27.4, experienceScore: 86, careerLevel: 88, trophyScore: 80 },
    notes: "Strong core around Rafael Leão and João Félix. Bernardo Silva the orchestrator."
  },
  NED: {
    name: "Netherlands", flag: "🇳🇱", confederation: "UEFA", fifaRank: 7, climate: "temperate",
    form: { wins: 12, draws: 4, losses: 4, goalsFor: 32, goalsAgainst: 18, avgPossession: 54, avgShotsOnTarget: 5.7, avgPassAccuracy: 84, avgTacklesWon: 22, strengthOfSchedule: 76 },
    preparation: { score: 79, notes: "Gakpo and Van Dijk generation. Solid preparation, one defensive absence." },
    tactics: { flexibility: 80, primarySystem: "4-3-3 / 3-4-3", notes: "Total football DNA. Direct, physical, dangerous from set pieces." },
    coaching: { score: 80, name: "Ronald Koeman", trophiesWon: 1 },
    squad: { avgAge: 27.6, experienceScore: 84, careerLevel: 86, trophyScore: 75 },
    notes: "Semi-finalists 2022. Hungry to go further. Van Dijk the defensive backbone."
  },
  BEL: {
    name: "Belgium", flag: "🇧🇪", confederation: "UEFA", fifaRank: 8, climate: "temperate",
    form: { wins: 11, draws: 4, losses: 5, goalsFor: 28, goalsAgainst: 20, avgPossession: 52, avgShotsOnTarget: 5.2, avgPassAccuracy: 84, avgTacklesWon: 20, strengthOfSchedule: 74 },
    preparation: { score: 74, notes: "Golden generation past peak. New wave led by De Ketelaere and Openda. Transition underway." },
    tactics: { flexibility: 76, primarySystem: "3-4-3 / 4-3-3", notes: "Physical and direct. Individual quality still high despite aging core." },
    coaching: { score: 74, name: "Domenico Tedesco", trophiesWon: 0 },
    squad: { avgAge: 28.8, experienceScore: 85, careerLevel: 87, trophyScore: 72 },
    notes: "Golden generation in twilight. De Bruyne's final WC chapter. New talent bridging the gap."
  },
  CRO: {
    name: "Croatia", flag: "🇭🇷", confederation: "UEFA", fifaRank: 10, climate: "mediterranean",
    form: { wins: 10, draws: 5, losses: 5, goalsFor: 26, goalsAgainst: 19, avgPossession: 52, avgShotsOnTarget: 4.6, avgPassAccuracy: 83, avgTacklesWon: 21, strengthOfSchedule: 72 },
    preparation: { score: 74, notes: "Modric era closing. New generation stepping up alongside veterans. Good morale." },
    tactics: { flexibility: 78, primarySystem: "4-3-3 / 4-2-3-1", notes: "Disciplined, controlled. Gvardiol and younger core taking over." },
    coaching: { score: 80, name: "Zlatko Dalić", trophiesWon: 2 },
    squad: { avgAge: 28.5, experienceScore: 83, careerLevel: 82, trophyScore: 74 },
    notes: "Runners-up 2018, 3rd 2022. Modric (40) possibly last WC. Gvardiol the future."
  },
  TUR: {
    name: "Turkey", flag: "🇹🇷", confederation: "UEFA", fifaRank: 29, climate: "mediterranean",
    form: { wins: 10, draws: 5, losses: 5, goalsFor: 28, goalsAgainst: 22, avgPossession: 50, avgShotsOnTarget: 4.8, avgPassAccuracy: 80, avgTacklesWon: 22, strengthOfSchedule: 66 },
    preparation: { score: 76, notes: "Calhanoglu-led midfield. Good qualifying campaign. Energetic and improving." },
    tactics: { flexibility: 72, primarySystem: "4-2-3-1", notes: "Hard-working, physical. Calhanoglu controls tempo. Can be dangerous on transition." },
    coaching: { score: 72, name: "Vincenzo Montella", trophiesWon: 1 },
    squad: { avgAge: 27.2, experienceScore: 72, careerLevel: 76, trophyScore: 55 },
    notes: "Quarterfinal 2002. Calhanoglu and Güler have Europe's best clubs. Hungry to overachieve."
  },
  AUT: {
    name: "Austria", flag: "🇦🇹", confederation: "UEFA", fifaRank: 26, climate: "temperate",
    form: { wins: 11, draws: 4, losses: 5, goalsFor: 30, goalsAgainst: 22, avgPossession: 52, avgShotsOnTarget: 5.2, avgPassAccuracy: 82, avgTacklesWon: 22, strengthOfSchedule: 68 },
    preparation: { score: 78, notes: "Rangnick's pressing philosophy embedded. Alaba return from injury key." },
    tactics: { flexibility: 80, primarySystem: "4-2-3-1 / 4-4-2", notes: "High-press, high-energy. Rangnick system well-drilled. Underrated in Europe." },
    coaching: { score: 82, name: "Ralf Rangnick", trophiesWon: 2 },
    squad: { avgAge: 27.2, experienceScore: 74, careerLevel: 78, trophyScore: 55 },
    notes: "Surprise quarterfinalist potential. Rangnick's system has transformed this squad."
  },
  SUI: {
    name: "Switzerland", flag: "🇨🇭", confederation: "UEFA", fifaRank: 15, climate: "temperate",
    form: { wins: 11, draws: 6, losses: 3, goalsFor: 28, goalsAgainst: 14, avgPossession: 52, avgShotsOnTarget: 4.8, avgPassAccuracy: 84, avgTacklesWon: 23, strengthOfSchedule: 70 },
    preparation: { score: 82, notes: "Consistently well-organized. Minimal injury concerns. Xhaka leads with experience." },
    tactics: { flexibility: 80, primarySystem: "3-4-2-1 / 4-3-3", notes: "Compact and hard to beat. Strong defensively, effective on the counter." },
    coaching: { score: 78, name: "Murat Yakin", trophiesWon: 1 },
    squad: { avgAge: 27.8, experienceScore: 80, careerLevel: 80, trophyScore: 60 },
    notes: "The most consistent overachiever in world football. Never glamorous, rarely eliminated early."
  },
  SCO: {
    name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", confederation: "UEFA", fifaRank: 35, climate: "cold",
    form: { wins: 9, draws: 5, losses: 6, goalsFor: 24, goalsAgainst: 22, avgPossession: 48, avgShotsOnTarget: 4.2, avgPassAccuracy: 78, avgTacklesWon: 23, strengthOfSchedule: 62 },
    preparation: { score: 72, notes: "Qualifying campaign tested mettle. Robertson's leadership vital. Morale mixed." },
    tactics: { flexibility: 68, primarySystem: "3-4-3 / 3-5-2", notes: "Physical and organized. Rely on set pieces and wide play. Limited in possession." },
    coaching: { score: 72, name: "Steve Clarke", trophiesWon: 0 },
    squad: { avgAge: 28.2, experienceScore: 72, careerLevel: 74, trophyScore: 45 },
    notes: "First WC in decades. Robertson and Adams lead. Will fight for every point."
  },
  CZE: {
    name: "Czech Republic", flag: "🇨🇿", confederation: "UEFA", fifaRank: 34, climate: "temperate",
    form: { wins: 9, draws: 5, losses: 6, goalsFor: 24, goalsAgainst: 20, avgPossession: 49, avgShotsOnTarget: 4.2, avgPassAccuracy: 80, avgTacklesWon: 22, strengthOfSchedule: 64 },
    preparation: { score: 74, notes: "Schick fit and leading the line. Solid qualifying campaign. Good team spirit." },
    tactics: { flexibility: 72, primarySystem: "4-2-3-1 / 4-3-3", notes: "Organized and physical. Schick the focal point. Can be dangerous on set pieces and counter." },
    coaching: { score: 72, name: "Ivan Hašek", trophiesWon: 0 },
    squad: { avgAge: 27.6, experienceScore: 72, careerLevel: 74, trophyScore: 52 },
    notes: "Euro 1996 finalists. Schick one of Europe's best strikers. Capable of beating anyone on their day."
  },
  BIH: {
    name: "Bosnia & Herzegovina", flag: "🇧🇦", confederation: "UEFA", fifaRank: 60, climate: "temperate",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 22, goalsAgainst: 24, avgPossession: 47, avgShotsOnTarget: 3.8, avgPassAccuracy: 76, avgTacklesWon: 21, strengthOfSchedule: 58 },
    preparation: { score: 68, notes: "Dzeko era closing but still influential. Young squad mixing in. Qualification was hard-fought." },
    tactics: { flexibility: 65, primarySystem: "4-3-3 / 4-4-2", notes: "Direct and physical. Relies on Dzeko hold-up play and wide pace. Defensively vulnerable." },
    coaching: { score: 65, name: "Sergej Barbarez", trophiesWon: 0 },
    squad: { avgAge: 27.8, experienceScore: 64, careerLevel: 68, trophyScore: 38 },
    notes: "First WC since 2014. Dzeko's swansong. Passionate and capable of upsets when organized."
  },
  NOR: {
    name: "Norway", flag: "🇳🇴", confederation: "UEFA", fifaRank: 14, climate: "cold",
    form: { wins: 13, draws: 4, losses: 3, goalsFor: 42, goalsAgainst: 14, avgPossession: 51, avgShotsOnTarget: 5.8, avgPassAccuracy: 82, avgTacklesWon: 22, strengthOfSchedule: 68 },
    preparation: { score: 84, notes: "Haaland fully fit and unstoppable. Qualified with ease. High morale and excellent squad depth." },
    tactics: { flexibility: 78, primarySystem: "4-3-3 / 4-2-3-1", notes: "Direct and powerful. Haaland's movement shapes everything. Physically dominant with pace on the break." },
    coaching: { score: 78, name: "Ståle Solbakken", trophiesWon: 1 },
    squad: { avgAge: 26.5, experienceScore: 76, careerLevel: 84, trophyScore: 55 },
    notes: "Haaland is the most feared striker at the tournament. Norway can go deep if he fires — and he will."
  },
  SWE: {
    name: "Sweden", flag: "🇸🇪", confederation: "UEFA", fifaRank: 24, climate: "cold",
    form: { wins: 11, draws: 5, losses: 4, goalsFor: 30, goalsAgainst: 16, avgPossession: 51, avgShotsOnTarget: 5.0, avgPassAccuracy: 82, avgTacklesWon: 23, strengthOfSchedule: 66 },
    preparation: { score: 80, notes: "Post-Ibrahimovic era has matured well. Isak leads a talented young generation. Solid qualifying campaign." },
    tactics: { flexibility: 76, primarySystem: "4-4-2 / 4-3-3", notes: "Organized and hard to break down. Isak's movement and technique add genuine quality in the final third." },
    coaching: { score: 76, name: "Jon Dahl Tomasson", trophiesWon: 1 },
    squad: { avgAge: 26.8, experienceScore: 74, careerLevel: 80, trophyScore: 52 },
    notes: "Semi-finalists 1994. Isak one of Europe's elite strikers. Solid, disciplined, capable of surprising anyone."
  },
  ALG: {
    name: "Algeria", flag: "🇩🇿", confederation: "CAF", fifaRank: 35, climate: "mediterranean",
    form: { wins: 12, draws: 4, losses: 4, goalsFor: 30, goalsAgainst: 14, avgPossession: 51, avgShotsOnTarget: 4.8, avgPassAccuracy: 80, avgTacklesWon: 23, strengthOfSchedule: 62 },
    preparation: { score: 76, notes: "Dominant in African qualifying. Mahrez era ending but squad depth improved. Strong morale." },
    tactics: { flexibility: 74, primarySystem: "4-3-3 / 4-2-3-1", notes: "Organized and hard to break down. Can be dangerous on the counter. Set pieces a weapon." },
    coaching: { score: 72, name: "Vladimir Petkovic", trophiesWon: 1 },
    squad: { avgAge: 27.5, experienceScore: 72, careerLevel: 74, trophyScore: 58 },
    notes: "AFCON 2019 winners. Won African qualifying group with ease. Belaili and Benrahma the creative spark."
  },
  QAT: {
    name: "Qatar", flag: "🇶🇦", confederation: "AFC", fifaRank: 58, climate: "arid",
    form: { wins: 9, draws: 4, losses: 7, goalsFor: 22, goalsAgainst: 22, avgPossession: 47, avgShotsOnTarget: 3.8, avgPassAccuracy: 76, avgTacklesWon: 22, strengthOfSchedule: 54 },
    preparation: { score: 68, notes: "Experienced WC hosts in 2022. Qualified through AFC fourth round. Motivation high to prove themselves away from home." },
    tactics: { flexibility: 64, primarySystem: "4-3-3 / 4-4-2", notes: "Defensive and organized. Strong as a unit. Limited individual quality at top level." },
    coaching: { score: 66, name: "Carlos Queiroz", trophiesWon: 1 },
    squad: { avgAge: 27.2, experienceScore: 62, careerLevel: 62, trophyScore: 42 },
    notes: "2022 hosts, first time qualifying on merit. Asian Cup winners 2019 and 2023. Akram Afif the star."
  },
  CPV: {
    name: "Cape Verde", flag: "🇨🇻", confederation: "CAF", fifaRank: 72, climate: "tropical",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 20, goalsAgainst: 20, avgPossession: 45, avgShotsOnTarget: 3.6, avgPassAccuracy: 74, avgTacklesWon: 22, strengthOfSchedule: 52 },
    preparation: { score: 65, notes: "Historic first WC qualification. Small nation, huge achievement. Squad drawn from Portuguese and European leagues." },
    tactics: { flexibility: 60, primarySystem: "4-4-2 / 5-4-1", notes: "Compact defensive unit. Dangerous on transitions. Limited possession game." },
    coaching: { score: 62, name: "Bubista", trophiesWon: 0 },
    squad: { avgAge: 27.0, experienceScore: 58, careerLevel: 62, trophyScore: 28 },
    notes: "First ever World Cup. Population of 500,000. The ultimate underdog story of WC2026."
  },
  CUW: {
    name: "Curaçao", flag: "🇨🇼", confederation: "CONCACAF", fifaRank: 85, climate: "tropical",
    form: { wins: 7, draws: 4, losses: 9, goalsFor: 18, goalsAgainst: 26, avgPossession: 44, avgShotsOnTarget: 3.2, avgPassAccuracy: 72, avgTacklesWon: 20, strengthOfSchedule: 50 },
    preparation: { score: 62, notes: "Smallest nation ever to qualify for a World Cup. Historic achievement. Squad mainly from Dutch football." },
    tactics: { flexibility: 55, primarySystem: "4-4-2", notes: "Physical and direct. Will defend deep and look for set pieces. Limited tactical options." },
    coaching: { score: 60, name: "Remko Bicentini", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 52, careerLevel: 58, trophyScore: 20 },
    notes: "Population of 150,000 — the smallest nation ever at a World Cup. Qualifying is their greatest achievement."
  },

  // ── CONCACAF ──────────────────────────────────────────────
  USA: {
    name: "USA", flag: "🇺🇸", confederation: "CONCACAF", fifaRank: 18, climate: "temperate",
    form: { wins: 11, draws: 5, losses: 4, goalsFor: 30, goalsAgainst: 18, avgPossession: 52, avgShotsOnTarget: 5.0, avgPassAccuracy: 82, avgTacklesWon: 21, strengthOfSchedule: 68 },
    preparation: { score: 80, notes: "Host nation advantage. Pulisic/Reyna/McKennie generation at prime. Home crowd boost." },
    tactics: { flexibility: 76, primarySystem: "4-3-3 / 4-2-3-1", notes: "Athletic and pressing. Improved technically. Home tournament elevates confidence significantly." },
    coaching: { score: 74, name: "Gregg Berhalter", trophiesWon: 0 },
    squad: { avgAge: 26.5, experienceScore: 74, careerLevel: 80, trophyScore: 50 },
    notes: "Hosts. Pulisic, Reyna, Weah — most talented generation in US soccer history. Home-court factor is real."
  },
  MEX: {
    name: "Mexico", flag: "🇲🇽", confederation: "CONCACAF", fifaRank: 20, climate: "tropical",
    form: { wins: 10, draws: 5, losses: 5, goalsFor: 26, goalsAgainst: 20, avgPossession: 50, avgShotsOnTarget: 4.6, avgPassAccuracy: 81, avgTacklesWon: 21, strengthOfSchedule: 64 },
    preparation: { score: 75, notes: "Co-host energy. Lozano era ending. New generation finding feet. Inconsistent form." },
    tactics: { flexibility: 72, primarySystem: "4-4-2 / 4-3-3", notes: "Direct and energetic. Individual flair but tactical inconsistency is well-documented." },
    coaching: { score: 72, name: "Jaime Lozano", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 76, careerLevel: 74, trophyScore: 58 },
    notes: "Co-host. Passionate support. The 'quinto partido' curse looms — but home soil changes everything."
  },
  CAN: {
    name: "Canada", flag: "🇨🇦", confederation: "CONCACAF", fifaRank: 23, climate: "cold",
    form: { wins: 10, draws: 6, losses: 4, goalsFor: 28, goalsAgainst: 16, avgPossession: 52, avgShotsOnTarget: 5.0, avgPassAccuracy: 82, avgTacklesWon: 22, strengthOfSchedule: 66 },
    preparation: { score: 79, notes: "Davies, David, Johnston — youngest elite squad in CONCACAF. Chemistry excellent." },
    tactics: { flexibility: 78, primarySystem: "3-4-3 / 4-3-3", notes: "High-intensity pressing. Rapid transitions. Davies on the wing is a nightmare to handle." },
    coaching: { score: 76, name: "Jesse Marsch", trophiesWon: 0 },
    squad: { avgAge: 25.5, experienceScore: 70, careerLevel: 80, trophyScore: 42 },
    notes: "Co-hosts. Dark horse. Davies + Jonathan David + Larin = genuine attacking threat. Most exciting in CONCACAF."
  },
  PAN: {
    name: "Panama", flag: "🇵🇦", confederation: "CONCACAF", fifaRank: 37, climate: "tropical",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 20, goalsAgainst: 22, avgPossession: 44, avgShotsOnTarget: 3.6, avgPassAccuracy: 74, avgTacklesWon: 24, strengthOfSchedule: 56 },
    preparation: { score: 70, notes: "Physical and disciplined. Low budget but high heart. Team unity is a strength." },
    tactics: { flexibility: 60, primarySystem: "4-4-2 / 5-4-1", notes: "Deep defensive block. Relies on set pieces and individual moments." },
    coaching: { score: 66, name: "Thomas Christiansen", trophiesWon: 0 },
    squad: { avgAge: 28.5, experienceScore: 65, careerLevel: 62, trophyScore: 38 },
    notes: "Second World Cup. Will be difficult to break down. Aim to survive the group."
  },
  HTI: {
    name: "Haiti", flag: "🇭🇹", confederation: "CONCACAF", fifaRank: 78, climate: "tropical",
    form: { wins: 7, draws: 4, losses: 9, goalsFor: 18, goalsAgainst: 24, avgPossession: 44, avgShotsOnTarget: 3.2, avgPassAccuracy: 72, avgTacklesWon: 22, strengthOfSchedule: 52 },
    preparation: { score: 62, notes: "Historic qualification amid national adversity. Squad drawn from MLS and European leagues. Exceptional morale." },
    tactics: { flexibility: 58, primarySystem: "4-4-2 / 4-3-3", notes: "Physical and direct. Will press and disrupt. Emotional and hard to break down when organized." },
    coaching: { score: 62, name: "Marc Collat", trophiesWon: 0 },
    squad: { avgAge: 26.5, experienceScore: 56, careerLevel: 60, trophyScore: 28 },
    notes: "Qualifying was a miracle. Will carry the nation's spirit into every match. Nothing to lose, everything to gain."
  },

  // ── AFC ──────────────────────────────────────────────────
  JPN: {
    name: "Japan", flag: "🇯🇵", confederation: "AFC", fifaRank: 14, climate: "temperate",
    form: { wins: 13, draws: 4, losses: 3, goalsFor: 36, goalsAgainst: 14, avgPossession: 53, avgShotsOnTarget: 5.5, avgPassAccuracy: 85, avgTacklesWon: 22, strengthOfSchedule: 72 },
    preparation: { score: 84, notes: "Elite Bundesliga/PL players in prime. Excellent tactical preparation. Strongest generation ever." },
    tactics: { flexibility: 84, primarySystem: "4-2-3-1 / 4-3-3", notes: "High pressing, technically excellent. Tactically sophisticated. Genuine European-level squad." },
    coaching: { score: 82, name: "Hajime Moriyasu", trophiesWon: 1 },
    squad: { avgAge: 26.8, experienceScore: 82, careerLevel: 85, trophyScore: 62 },
    notes: "Best squad in Asian football history. Multiple Champions League players. Dark horse to reach QF."
  },
  KOR: {
    name: "South Korea", flag: "🇰🇷", confederation: "AFC", fifaRank: 21, climate: "temperate",
    form: { wins: 11, draws: 4, losses: 5, goalsFor: 28, goalsAgainst: 18, avgPossession: 50, avgShotsOnTarget: 4.8, avgPassAccuracy: 81, avgTacklesWon: 22, strengthOfSchedule: 66 },
    preparation: { score: 78, notes: "Son Heung-min leading final World Cup push. Lee Kang-in provides creative spark." },
    tactics: { flexibility: 76, primarySystem: "4-3-3 / 4-4-2", notes: "Organized, athletic, counter-press. Son can unlock any defence." },
    coaching: { score: 74, name: "Hong Myung-bo", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 76, careerLevel: 80, trophyScore: 55 },
    notes: "Semi-finalists 2002 at home. Son at his last WC. Expect passion and effort beyond ability."
  },
  IRN: {
    name: "Iran", flag: "🇮🇷", confederation: "AFC", fifaRank: 22, climate: "arid",
    form: { wins: 11, draws: 5, losses: 4, goalsFor: 26, goalsAgainst: 14, avgPossession: 48, avgShotsOnTarget: 4.2, avgPassAccuracy: 78, avgTacklesWon: 24, strengthOfSchedule: 60 },
    preparation: { score: 74, notes: "Dominant in Asian qualifying. Defensively very organized. Some political distractions managed." },
    tactics: { flexibility: 70, primarySystem: "4-3-3 / 4-5-1", notes: "Defensive and physical. Counter-attack and set pieces are main weapons." },
    coaching: { score: 74, name: "Amir Ghalenoei", trophiesWon: 0 },
    squad: { avgAge: 28.0, experienceScore: 72, careerLevel: 70, trophyScore: 45 },
    notes: "Asian powerhouse. Difficult to score against. Mehdi Taremi the dangerman."
  },
  AUS: {
    name: "Australia", flag: "🇦🇺", confederation: "AFC", fifaRank: 27, climate: "temperate",
    form: { wins: 10, draws: 5, losses: 5, goalsFor: 26, goalsAgainst: 18, avgPossession: 50, avgShotsOnTarget: 4.6, avgPassAccuracy: 80, avgTacklesWon: 22, strengthOfSchedule: 62 },
    preparation: { score: 76, notes: "Positive momentum from 2022 QF run. Atkinson/Hrustic generation maturing. Socceroos belief high." },
    tactics: { flexibility: 74, primarySystem: "4-2-3-1 / 4-3-3", notes: "Athletic and pressing. Improved technically. Hard to beat when organized." },
    coaching: { score: 74, name: "Tony Popovic", trophiesWon: 0 },
    squad: { avgAge: 27.2, experienceScore: 72, careerLevel: 74, trophyScore: 48 },
    notes: "Quarter-finalists 2022. Physical, determined. European-based nucleus gives real quality."
  },
  KSA: {
    name: "Saudi Arabia", flag: "🇸🇦", confederation: "AFC", fifaRank: 45, climate: "arid",
    form: { wins: 9, draws: 4, losses: 7, goalsFor: 22, goalsAgainst: 24, avgPossession: 46, avgShotsOnTarget: 3.8, avgPassAccuracy: 76, avgTacklesWon: 22, strengthOfSchedule: 56 },
    preparation: { score: 70, notes: "Saudi Pro League investment brought back diaspora players. Hard to judge true level." },
    tactics: { flexibility: 65, primarySystem: "4-2-3-1", notes: "Organized defensive block with pace on the counter. Famous for the Argentina upset of 2022." },
    coaching: { score: 68, name: "Roberto Mancini", trophiesWon: 2 },
    squad: { avgAge: 27.5, experienceScore: 64, careerLevel: 65, trophyScore: 40 },
    notes: "Upset Argentina in 2022. Capable of a shock on their day. Mancini adds tactical discipline."
  },
  IRQ: {
    name: "Iraq", flag: "🇮🇶", confederation: "AFC", fifaRank: 50, climate: "arid",
    form: { wins: 9, draws: 5, losses: 6, goalsFor: 24, goalsAgainst: 22, avgPossession: 47, avgShotsOnTarget: 4.0, avgPassAccuracy: 76, avgTacklesWon: 23, strengthOfSchedule: 56 },
    preparation: { score: 68, notes: "Historic qualification. Squad drawn from European and Middle Eastern clubs. High morale." },
    tactics: { flexibility: 62, primarySystem: "4-4-2 / 4-2-3-1", notes: "Energetic, physical. Will press and disrupt. Limited tactical sophistication." },
    coaching: { score: 64, name: "Jesús Casas", trophiesWon: 0 },
    squad: { avgAge: 27.0, experienceScore: 62, careerLevel: 62, trophyScore: 38 },
    notes: "First WC since 1986. Will be motivated beyond measure. Difficult to predict ceiling."
  },
  JOR: {
    name: "Jordan", flag: "🇯🇴", confederation: "AFC", fifaRank: 55, climate: "arid",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 20, goalsAgainst: 22, avgPossession: 45, avgShotsOnTarget: 3.5, avgPassAccuracy: 74, avgTacklesWon: 23, strengthOfSchedule: 52 },
    preparation: { score: 65, notes: "AFC Asian Cup runners-up 2023. Qualified through playoffs. Small squad depth." },
    tactics: { flexibility: 60, primarySystem: "4-4-2", notes: "Defensive and physical. Reactive rather than proactive. Rely on discipline." },
    coaching: { score: 62, name: "Hussein Ammouta", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 58, careerLevel: 58, trophyScore: 28 },
    notes: "Sensational AFC Asian Cup run in 2023. Will bring that underdog spirit to the WC stage."
  },
  UZB: {
    name: "Uzbekistan", flag: "🇺🇿", confederation: "AFC", fifaRank: 60, climate: "arid",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 22, goalsAgainst: 24, avgPossession: 46, avgShotsOnTarget: 3.8, avgPassAccuracy: 75, avgTacklesWon: 22, strengthOfSchedule: 52 },
    preparation: { score: 66, notes: "Improving federation. Several players now at European clubs. First WC historic moment." },
    tactics: { flexibility: 60, primarySystem: "4-3-3", notes: "Energetic, pressing. Technical improvement notable over past four years." },
    coaching: { score: 62, name: "Srecko Katanec", trophiesWon: 0 },
    squad: { avgAge: 26.5, experienceScore: 56, careerLevel: 60, trophyScore: 25 },
    notes: "Debut World Cup. Young, ambitious, nothing to lose. Shomurodov provides genuine quality."
  },

  // ── CAF ──────────────────────────────────────────────────
  MAR: {
    name: "Morocco", flag: "🇲🇦", confederation: "CAF", fifaRank: 10, climate: "mediterranean",
    form: { wins: 13, draws: 4, losses: 3, goalsFor: 32, goalsAgainst: 10, avgPossession: 50, avgShotsOnTarget: 4.8, avgPassAccuracy: 80, avgTacklesWon: 26, strengthOfSchedule: 72 },
    preparation: { score: 85, notes: "Semi-finalists 2022. Core group intact. Hakimi, En-Nesyri in prime years." },
    tactics: { flexibility: 84, primarySystem: "4-3-3 / 5-4-1", notes: "Elite defensive organization. Can press or sit deep with equal effectiveness. Hakimi devastating." },
    coaching: { score: 84, name: "Walid Regragui", trophiesWon: 1 },
    squad: { avgAge: 27.2, experienceScore: 82, careerLevel: 86, trophyScore: 68 },
    notes: "2022 semi-finalists. African champions. Best African squad ever assembled. Genuine QF+ contender."
  },
  SEN: {
    name: "Senegal", flag: "🇸🇳", confederation: "CAF", fifaRank: 19, climate: "tropical",
    form: { wins: 11, draws: 5, losses: 4, goalsFor: 28, goalsAgainst: 16, avgPossession: 50, avgShotsOnTarget: 4.8, avgPassAccuracy: 78, avgTacklesWon: 24, strengthOfSchedule: 66 },
    preparation: { score: 78, notes: "African champions. Mané era past peak but squad renewed. Diatta and Diedhiou step up." },
    tactics: { flexibility: 74, primarySystem: "4-3-3 / 4-4-2", notes: "Physical, athletic, direct. Excellent pressing. Tactically solid under Aliou Cissé." },
    coaching: { score: 76, name: "Aliou Cissé", trophiesWon: 2 },
    squad: { avgAge: 27.5, experienceScore: 76, careerLevel: 78, trophyScore: 58 },
    notes: "AFCON champions 2022. Post-Mané era transition underway. Still Africa's most complete squad."
  },
  EGY: {
    name: "Egypt", flag: "🇪🇬", confederation: "CAF", fifaRank: 30, climate: "arid",
    form: { wins: 10, draws: 5, losses: 5, goalsFor: 24, goalsAgainst: 18, avgPossession: 49, avgShotsOnTarget: 4.4, avgPassAccuracy: 78, avgTacklesWon: 22, strengthOfSchedule: 60 },
    preparation: { score: 74, notes: "Salah-led but over-reliance is the concern. Strong squad unity." },
    tactics: { flexibility: 70, primarySystem: "4-2-3-1", notes: "Built around Salah. Defensively organized but tactically predictable." },
    coaching: { score: 72, name: "Rui Vitória", trophiesWon: 1 },
    squad: { avgAge: 28.0, experienceScore: 74, careerLevel: 74, trophyScore: 58 },
    notes: "Salah's best WC chance left. If he's firing, Egypt can shock anyone. Seven-time AFCON winners."
  },
  GHA: {
    name: "Ghana", flag: "🇬🇭", confederation: "CAF", fifaRank: 58, climate: "tropical",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 22, goalsAgainst: 20, avgPossession: 47, avgShotsOnTarget: 4.0, avgPassAccuracy: 76, avgTacklesWon: 22, strengthOfSchedule: 56 },
    preparation: { score: 70, notes: "Black Stars with strong diaspora talent. Kudus and Semenyo provide European quality. Good squad balance." },
    tactics: { flexibility: 68, primarySystem: "4-2-3-1 / 4-3-3", notes: "Pacey and direct. Kudus is the creative spark. Physical and competitive at both ends." },
    coaching: { score: 68, name: "Otto Addo", trophiesWon: 0 },
    squad: { avgAge: 26.5, experienceScore: 68, careerLevel: 72, trophyScore: 45 },
    notes: "Quarter-finalists 2010. Kudus (Ajax/West Ham) is the match-winner. Can upset anyone when organized."
  },
  CIV: {
    name: "Ivory Coast", flag: "🇨🇮", confederation: "CAF", fifaRank: 38, climate: "tropical",
    form: { wins: 10, draws: 4, losses: 6, goalsFor: 26, goalsAgainst: 22, avgPossession: 50, avgShotsOnTarget: 4.6, avgPassAccuracy: 78, avgTacklesWon: 22, strengthOfSchedule: 58 },
    preparation: { score: 72, notes: "AFCON 2023 champions. Post-Drogba generation settling. Zaha, Diallo, Kessié key." },
    tactics: { flexibility: 72, primarySystem: "4-3-3 / 4-4-2", notes: "Technically solid, physical. Direct and dangerous. Can play with flair and grit." },
    coaching: { score: 72, name: "Emerse Faé", trophiesWon: 1 },
    squad: { avgAge: 27.5, experienceScore: 72, careerLevel: 74, trophyScore: 55 },
    notes: "AFCON 2023 champions. Kessié and Zaha bring PL quality. Capable of exiting group at minimum."
  },
  RSA: {
    name: "South Africa", flag: "🇿🇦", confederation: "CAF", fifaRank: 65, climate: "temperate",
    form: { wins: 8, draws: 5, losses: 7, goalsFor: 20, goalsAgainst: 24, avgPossession: 46, avgShotsOnTarget: 3.8, avgPassAccuracy: 75, avgTacklesWon: 22, strengthOfSchedule: 54 },
    preparation: { score: 66, notes: "Improved since 2010. Squad building under new federation leadership." },
    tactics: { flexibility: 62, primarySystem: "4-4-2", notes: "Physical and organized. Limited technical quality against elite opposition." },
    coaching: { score: 64, name: "Hugo Broos", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 62, careerLevel: 64, trophyScore: 40 },
    notes: "Hosts of 2010. Returning to the WC stage. Nostalgic but young squad needs tournament experience."
  },
  COD: {
    name: "DR Congo", flag: "🇨🇩", confederation: "CAF", fifaRank: 44, climate: "tropical",
    form: { wins: 9, draws: 4, losses: 7, goalsFor: 22, goalsAgainst: 24, avgPossession: 46, avgShotsOnTarget: 3.8, avgPassAccuracy: 74, avgTacklesWon: 23, strengthOfSchedule: 54 },
    preparation: { score: 66, notes: "Improving steadily. Several players now at mid-tier European clubs." },
    tactics: { flexibility: 62, primarySystem: "4-4-2 / 4-3-3", notes: "Athletic and direct. Improving technically. Set pieces a weapon." },
    coaching: { score: 64, name: "Sébastien Desabre", trophiesWon: 0 },
    squad: { avgAge: 27.0, experienceScore: 60, careerLevel: 62, trophyScore: 35 },
    notes: "Potential rising. Muanda Simba generation showing Africa's future. Will be compact and combative."
  },
  TUN: {
    name: "Tunisia", flag: "🇹🇳", confederation: "CAF", fifaRank: 35, climate: "mediterranean",
    form: { wins: 9, draws: 6, losses: 5, goalsFor: 22, goalsAgainst: 16, avgPossession: 48, avgShotsOnTarget: 4.0, avgPassAccuracy: 78, avgTacklesWon: 24, strengthOfSchedule: 58 },
    preparation: { score: 72, notes: "Well-organized under Jalel Kadri. Defensive solidity is their trademark. Khazri era over." },
    tactics: { flexibility: 70, primarySystem: "4-4-2 / 4-3-3", notes: "Defensive-minded and organized. Compact and difficult to break down." },
    coaching: { score: 70, name: "Jalel Kadri", trophiesWon: 0 },
    squad: { avgAge: 27.8, experienceScore: 68, careerLevel: 68, trophyScore: 45 },
    notes: "Conceded the fewest goals in African qualifying. Won't win the tournament but won't be easy to beat."
  },

  // ── OFC ──────────────────────────────────────────────────
  NZL: {
    name: "New Zealand", flag: "🇳🇿", confederation: "OFC", fifaRank: 95, climate: "temperate",
    form: { wins: 7, draws: 4, losses: 9, goalsFor: 18, goalsAgainst: 28, avgPossession: 44, avgShotsOnTarget: 3.2, avgPassAccuracy: 72, avgTacklesWon: 20, strengthOfSchedule: 48 },
    preparation: { score: 62, notes: "Limited preparation against top opposition. A-League based most of squad." },
    tactics: { flexibility: 55, primarySystem: "4-4-2", notes: "Physical and direct. Very limited technically against elite competition." },
    coaching: { score: 60, name: "Darren Bazeley", trophiesWon: 0 },
    squad: { avgAge: 27.5, experienceScore: 52, careerLevel: 56, trophyScore: 22 },
    notes: "OFC representatives. Will compete with heart. A draw or upset would be a legendary achievement."
  }
};
