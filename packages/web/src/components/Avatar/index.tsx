import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { theme } from '../../../stitches.config'

import { StyledAvatar } from './styles'

type AvatarProps = React.ComponentProps<typeof StyledAvatar> & {
  src: string
  size: string
  alt?: string
  radius?: string
  clickable?: boolean
  verified?: boolean
  placeholderColor?: string
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  radius,
  placeholderColor = theme.colors['background-tertiary'].value,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <StyledAvatar radius={radius} {...props}>
      {!loaded ? (
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <rect
            width="100%"
            height="100%"
            rx={radius === 'semiRounded' ? 16 : 100}
            ry={radius === 'semiRounded' ? 16 : 100}
            fill={placeholderColor}
          />
        </svg>
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        style={!loaded ? { visibility: 'hidden' } : {}}
        onLoad={handleLoad}
      />
      <div className="check-circle">
        <FontAwesomeIcon icon={faCheck} className="fa" />
      </div>
    </StyledAvatar>
  )
}
