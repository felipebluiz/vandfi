/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

interface Props {
  width: number
  height: number
}

export const useWindowDimensions = (): Props => {
  const hasWindow = typeof window !== 'undefined'

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : 0
    const height = hasWindow ? window.innerHeight : 0

    return { width, height }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
