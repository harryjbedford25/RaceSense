/**
 * Utility for handling return-to URL after authentication
 * Safely extracts and validates return URLs from query params
 */

export function safeReturnTo(defaultTo = '/') {
  if (typeof window === 'undefined') return defaultTo;

  const params = new URLSearchParams(window.location.search);
  const returnTo = params.get('returnTo');

  if (!returnTo) return defaultTo;

  // Validate it's a same-origin path
  try {
    const url = new URL(returnTo, window.location.origin);
    if (url.origin !== window.location.origin) {
      return defaultTo;
    }
    return url.pathname + url.search + url.hash;
  } catch {
    return defaultTo;
  }
}
