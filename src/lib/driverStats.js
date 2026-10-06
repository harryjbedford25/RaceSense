/**
 * Pure maths and formatting over plain race-result objects.
 * No backend and no framework here, so this module survives a backend swap.
 *
 * Result fields: championship, event, track, track_country, date, position,
 * grid_position, laps, best_lap_seconds, gap_to_winner_seconds, fastest_lap, dnf
 */

const isNumber = (value) => typeof value === "number" && isFinite(value);
const isFinish = (result) => !result.dnf && isNumber(result.position);
const bestLaps = (results) =>
  results.map((r) => r.best_lap_seconds).filter(isNumber);

export function formatLapTime(seconds) {
  if (!isNumber(seconds) || seconds <= 0) return null;
  const minutes = Math.floor(seconds / 60);
  const rest = seconds - minutes * 60;
  return minutes > 0
    ? `${minutes}:${rest.toFixed(3).padStart(6, "0")}`
    : rest.toFixed(3);
}

export function formatGap(seconds) {
  if (!isNumber(seconds) || seconds <= 0) return null;
  return `+${seconds.toFixed(3)}`;
}

export function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (isNaN(date.getTime())) return null;
  return date
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

export function positionLabel(result) {
  if (result.dnf) return "DNF";
  if (!isNumber(result.position)) return null;
  return `P${result.position}`;
}

export function positionTone(result) {
  if (result.dnf) return "dnf";
  if (result.position === 1) return "win";
  if (result.position <= 3) return "podium";
  return "finish";
}

export function computeTotals(results = []) {
  const finishes = results.filter(isFinish);
  const championships = new Set(
    results.map((r) => r.championship).filter(Boolean)
  );
  const laps = bestLaps(results);
  return {
    races: results.length,
    wins: finishes.filter((r) => r.position === 1).length,
    podiums: finishes.filter((r) => r.position <= 3).length,
    poles: results.filter((r) => r.grid_position === 1).length,
    fastestLaps: results.filter((r) => r.fastest_lap).length,
    bestLapSeconds: laps.length ? Math.min(...laps) : null,
    championships: championships.size,
  };
}

/** Only the stats that actually have data — no zero-filled dashboards. */
export function statCards(results = []) {
  const totals = computeTotals(results);
  const cards = [];
  const add = (label, value, note) =>
    label && cards.push({ label, value: String(value), note: note || null });

  if (totals.races) add("Races", totals.races);
  if (totals.wins) add("Wins", totals.wins);
  if (totals.podiums) add("Podiums", totals.podiums);
  if (totals.poles) add("Pole positions", totals.poles);
  if (totals.fastestLaps) add("Fastest laps", totals.fastestLaps);
  if (totals.bestLapSeconds) add("Best lap", formatLapTime(totals.bestLapSeconds));
  if (totals.championships) add("Championships entered", totals.championships);

  return cards;
}

export function consistencyPercent(results = []) {
  const laps = bestLaps(results);
  if (laps.length < 2) return null;
  const best = Math.min(...laps);
  const within = laps.filter((lap) => lap <= best * 1.02).length;
  return Math.round((within / laps.length) * 100);
}

export function performanceStats(results = []) {
  const finishes = results.filter(isFinish);
  const laps = bestLaps(results);
  const rows = [];

  if (finishes.length) {
    const average =
      finishes.reduce((sum, r) => sum + r.position, 0) / finishes.length;
    rows.push({
      label: "Average finish",
      value: `P${average.toFixed(1)}`,
      note: `${finishes.length} finishes on record`,
    });
  }

  if (laps.length) {
    const average = laps.reduce((sum, lap) => sum + lap, 0) / laps.length;
    rows.push({
      label: "Average best lap",
      value: formatLapTime(average),
      note: `Across ${laps.length} timed races`,
    });
    rows.push({
      label: "Personal best lap",
      value: formatLapTime(Math.min(...laps)),
    });
  }

  const consistency = consistencyPercent(results);
  if (consistency !== null) {
    rows.push({
      label: "Consistency",
      value: `${consistency}%`,
      note: "Races within 2% of personal best",
    });
  }

  return rows;
}

export function recentForm(results = [], count = 5) {
  return results.slice(0, count).map((result) => ({
    label: positionLabel(result) || "—",
    tone: positionTone(result),
  }));
}

export function trackSummary(results = []) {
  const byTrack = new Map();

  results.forEach((result) => {
    const name = result.track || "Unnamed circuit";
    const entry = byTrack.get(name) || {
      track: name,
      country: result.track_country || null,
      races: 0,
      bestLapSeconds: null,
      bestPosition: null,
    };

    entry.races += 1;
    if (!entry.country && result.track_country) entry.country = result.track_country;
    if (
      isNumber(result.best_lap_seconds) &&
      (entry.bestLapSeconds === null || result.best_lap_seconds < entry.bestLapSeconds)
    ) {
      entry.bestLapSeconds = result.best_lap_seconds;
    }
    if (
      isFinish(result) &&
      (entry.bestPosition === null || result.position < entry.bestPosition)
    ) {
      entry.bestPosition = result.position;
    }

    byTrack.set(name, entry);
  });

  return [...byTrack.values()].sort((a, b) => b.races - a.races);
}

/** Points awarded per finishing position; anything lower scores nothing. */
const POINTS_BY_POSITION = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

export function pointsFor(result) {
  if (!isFinish(result)) return 0;
  return POINTS_BY_POSITION[result.position - 1] || 0;
}

/** Share of a driver's races they won, as a whole percentage. */
export function winRatePercent(wins, races) {
  if (!races) return null;
  return Math.round((wins / races) * 100);
}

/**
 * Drivers joined with their results, ranked by points, then wins, podiums and
 * win rate. Drivers without any results keep their place at the bottom — they
 * still have a profile worth opening.
 */
export function buildStandings(drivers = [], results = []) {
  const byDriver = new Map(drivers.map((driver) => [driver.id, []]));

  results.forEach((result) => {
    const rows = byDriver.get(result.driver_id);
    if (rows) rows.push(result);
  });

  return drivers
    .map((driver) => {
      const rows = byDriver.get(driver.id) || [];
      const totals = computeTotals(rows);
      return {
        driver,
        races: totals.races,
        wins: totals.wins,
        podiums: totals.podiums,
        points: rows.reduce((sum, result) => sum + pointsFor(result), 0),
        winRate: winRatePercent(totals.wins, totals.races),
      };
    })
    .sort(
      (a, b) =>
        b.points - a.points ||
        b.wins - a.wins ||
        b.podiums - a.podiums ||
        (b.winRate || 0) - (a.winRate || 0) ||
        a.driver.name.localeCompare(b.driver.name)
    );
}