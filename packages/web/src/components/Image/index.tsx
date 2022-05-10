import React, { useState, useRef, useEffect } from 'react'
import { theme } from '../../../stitches.config'

import { Container } from './styles'

interface ImageProps {
  width: string
  height: string
  src: string
  alt?: string
  className?: string
  placeholderColor?: string
  borderRadius?: string
}

export const Image: React.FC<ImageProps> = ({
  width,
  height,
  src,
  alt,
  className = '',
  placeholderColor = theme.colors['background-tertiary'].value,
  borderRadius = 0
}) => {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleLoad = () => setLoaded(true)

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <Container css={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}>
      {!loaded ? (
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <rect
            width="100%"
            height="100%"
            rx={Number(borderRadius) * 2}
            ry={Number(borderRadius) * 2}
            fill={placeholderColor}
          />
        </svg>
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={className}
        style={!loaded ? { visibility: 'hidden' } : {}}
        onLoad={handleLoad}
      />
    </Container>
  )
}
