/**
 * Profile links are plain { label, url } objects — kept free of any backend
 * concern so the data layer (driverData.js) stays the only thing to swap on
 * migration.
 */

export const MAX_LINKS = 6;

export function normaliseLinkUrl(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
}

/** Trims, drops blank entries, adds a scheme where missing, caps the count. */
export function normaliseLinks(input) {
  if (!Array.isArray(input)) return [];
  return input
    .map((link) => ({
      label: String(link?.label || "").trim(),
      url: normaliseLinkUrl(link?.url),
    }))
    .filter((link) => link.url)
    .slice(0, MAX_LINKS);
}

/** Falls back to the bare hostname when the driver left the label blank. */
export function linkLabel(link) {
  if (link.label) return link.label;
  try {
    return new URL(link.url).hostname.replace(/^www\./, "");
  } catch (e) {
    return link.url;
  }
}