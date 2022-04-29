import React from 'react'

import { Header } from '@/components/Header'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Container>
          <span>Hello World 123</span>
        </Container>
      </div>
    </>
  )
}

export default Home
