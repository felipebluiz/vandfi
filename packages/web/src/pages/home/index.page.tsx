import React from 'react'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Container>
          <Heading>Create, Sell and Collect Digital NFT Items</Heading>
          <Text>
            The world&apos;s best and safest nft marketplace with ethereum
            currency.
          </Text>
        </Container>
      </div>
    </>
  )
}

export default Home
