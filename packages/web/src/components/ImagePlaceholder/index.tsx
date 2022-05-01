import React, { useState, useRef } from 'react'

import { Container } from './styles'

interface ImagePlaceholderProps {
  width: string
  height: string
  src: string
  alt: string
  className?: string
  placeholderColor?: string
  borderRadius?: string
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  src,
  alt,
  className = '',
  placeholderColor = '#232e43',
  borderRadius = 0
}) => {
  const [, setLoaded] = useState(false)
  const imageRef = useRef()
  const complete = !!imageRef.current

  return (
    <Container css={{ maxWidth: `${width}px`, maxHeight: `${height}px` }}>
      {!complete ? (
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
        style={!complete ? { visibility: 'hidden' } : {}}
        onLoad={() => setLoaded(true)}
      />
    </Container>
  )
}

export { ImagePlaceholder }
