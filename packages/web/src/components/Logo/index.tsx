import React from 'react'
import Link from 'next/link'

import { Container, LogoAnimation } from './styles'

interface LogoProps {
  animation: boolean
}

const Logo: React.FC<LogoProps> = ({ animation }) => {
  return (
    <Container
      className="logo-container"
      css={{
        '@bp3': {
          '&:hover': {
            animation: animation ? `${LogoAnimation} 1s infinite` : 'none'
          }
        }
      }}
    >
      <Link href="/">
        <a>
          <div className="logo">V</div>
          <h1>Vandfi</h1>
        </a>
      </Link>
    </Container>
  )
}

export { Logo }
