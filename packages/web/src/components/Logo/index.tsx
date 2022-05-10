import React from 'react'
import Link from 'next/link'

import { StyledLogo } from './styles'

type LogoProps = React.ComponentProps<typeof StyledLogo> & {
  size?: string
  animation?: boolean
}

export const Logo: React.FC<LogoProps> = props => {
  return (
    <StyledLogo className="logo-container" {...props}>
      <Link href="/">
        <a>
          <div className="logo">V</div>
          <h1>Vandfi</h1>
        </a>
      </Link>
    </StyledLogo>
  )
}
