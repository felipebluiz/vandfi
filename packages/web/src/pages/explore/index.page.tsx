import React from 'react'
import Head from 'next/head'
import { Header } from '@/components/Header'

import { Container } from './styles'

const Explore: React.FC = () => {
  return (
    <>
      <Head>
        <title>Explore | Vandfi</title>
      </Head>
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
