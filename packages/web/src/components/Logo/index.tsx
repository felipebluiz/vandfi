import React from 'react'
import Link from 'next/link'

import { Container } from './styles'

interface LogoProps {
  animation: boolean
}

const Logo: React.FC<LogoProps> = ({ animation }) => {
  return (
    <Container className="logo-container" animation={animation}>
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
