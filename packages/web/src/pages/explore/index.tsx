import React from 'react'

import { Header } from '@/components/Header'

import { Container } from './styles'

const Explore: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Container>
          <span>Explore</span>
        </Container>
      </div>
    </>
  )
}

export default Explore
