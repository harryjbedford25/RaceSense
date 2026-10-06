const WIX_MEDIA_HOSTS = {
  "media.db.com": "/images/public/",
  "static.wixstatic.com": "/media/",
}

export const DEFAULT_TRANSFORM_WIDTH = 1024
export const IMAGE_LOAD_MODE = {
  OPTIMIZED: "optimized",
  ORIGINAL: "original",
  FALLBACK: "fallback",
}

const DEVICE_PIXEL_RATIOS = [1, 2, 3]
const MAX_DIMENSION = 6000

export function splitImageProps(props) {
  const wrapperProps = {}
  const imageProps = {}
  for (const [key, value] of Object.entries(props)) {
    if (key.startsWith("data-")) wrapperProps[key] = value
    else imageProps[key] = value
  }
  return { wrapperProps, imageProps }
}

export function getImagePreviewClassName(className, currentClassName, baselineClassName) {
  const sourceClasses = new Set((className || "").split(/\s+/))
  const baselineClasses = new Set(baselineClassName.split(/\s+/))
  return currentClassName.split(/\s+/).filter((token) =>
    !["inline-block", "relative"].includes(token) || !baselineClasses.has(token) || sourceClasses.has(token)
  ).join(" ")
}

/** Returns transform metadata only for canonical public Wix image URLs. */
export function parseWixMediaUrl(src) {
  try {
    const url = new URL(src)
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.port && url.port !== "443")
    ) {
      return null
    }

    const pathPrefix = WIX_MEDIA_HOSTS[url.hostname]
    if (!pathPrefix) return null

    const transformed = url.pathname.match(/^(.*)\/v1\/(?:fill|fit)\/[^/]+\/[^/]+$/i)
    const basePath = transformed ? transformed[1] : url.pathname
    const filename = basePath.split("/").pop()
    if (
      !basePath.startsWith(pathPrefix) ||
      !filename ||
      !/\.[a-z0-9]+$/i.test(filename) ||
      /\.svg$/i.test(filename)
    ) {
      return null
    }

    return { baseUrl: `${url.origin}${basePath}`, filename }
  } catch {
    return null
  }
}

const clampDim = (n) => Math.min(Math.max(Math.round(n), 1), MAX_DIMENSION)
const clamp01 = (n) => Math.min(1, Math.max(0, n))

export function buildTransformUrl(
  { baseUrl, filename },
  { width, height, crop, focalPoint, quality }
) {
  // Since we're not using Base44 anymore, return the original URL
  // The transformation service is no longer available
  return `${baseUrl}/${filename}`
}

export function buildSrcSet(parsed, options) {
  // Since we're not using Base44 transformations, return empty srcset
  return ''
}

export function getOriginalImageUrl(src, parsed) {
  return parsed?.baseUrl || src
}

export function nextImageLoadMode(mode) {
  return mode === IMAGE_LOAD_MODE.OPTIMIZED
    ? IMAGE_LOAD_MODE.ORIGINAL
    : IMAGE_LOAD_MODE.FALLBACK
}
