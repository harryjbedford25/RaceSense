import * as React from "react"

export function useResponsiveImage(
  { parsed, fittingType, focalPoint, quality, className, onLoad, onSourceChange },
  ref
) {
  const wrapperRef = React.useRef(null)
  const imgRef = React.useRef(null)
  const [loaded, setLoaded] = React.useState(false)
  const [options, setOptions] = React.useState(null)

  React.useEffect(() => {
    if (!wrapperRef.current || !parsed) return

    const rect = wrapperRef.current.getBoundingClientRect()
    const width = Math.round(rect.width * window.devicePixelRatio)

    if (width > 0) {
      setOptions({
        width,
        height: rect.height ? Math.round(rect.height * window.devicePixelRatio) : undefined,
        fittingType,
        focalPoint,
        quality: quality || 80,
      })
    }
  }, [parsed, fittingType, focalPoint, quality])

  const handleLoad = () => {
    setLoaded(true)
    onLoad?.()
  }

  React.useImperativeHandle(ref, () => ({
    get image() {
      return imgRef.current
    },
  }))

  return { wrapperRef, imgRef, loaded, options, handleLoad }
}
