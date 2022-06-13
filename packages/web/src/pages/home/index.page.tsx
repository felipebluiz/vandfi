/* eslint-disable indent */
import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusCircle,
  faRocket,
  faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { truncateAddress, currencyFormat } from 'src/utils'

import { RadialEffect } from '@/assets/styles/global'
import { Container } from './styles'
import { VerifiedIcon } from '@/components/VerifiedIcon'
import { CountDown } from '@/components/Countdown'

interface Item {
  image: string
  name: string
  address: string
  creator: Creator
  collection: Collection
  onSale: boolean
  onAuction: boolean
  openOffers: boolean
  countdownDate?: string
  price: Price
}

interface Creator {
  avatarUrl: string
  name: string
  address: string
  verified: boolean
}

interface Collection {
  images: string[]
  name: string
  address: string
  verified: boolean
  creator: Creator
  price: Price
}

interface Price {
  symbol: string
  amount: number
  convertedAmount: number
}

interface CurrentBid {
  creator: Creator
  price: Price
}

interface Featured {
  type: string
  item?: Item
  collection?: Collection
}

interface HomeProps {
  currentBid: CurrentBid
  featured: Featured
}

const Home: React.FC<HomeProps> = ({
  currentBid = {
    creator: {
      avatarUrl: '/images/avatar.png',
      address: '0x06d4b27c936edd3cea4d41d4ecd8bea83e6e4239',
      verified: true
    },
    price: {
      symbol: 'wETH',
      amount: 10.5,
      convertedAmount: 2688.27
    }
  },
  featured = {
    type: 'collection',
    collection: {
      images: [
        '/images/bored-kennel-1.png',
        '/images/bored-kennel-2.png',
        '/images/bored-kennel-3.png'
      ],
      name: 'BoredApeKennelClub',
      verified: true,
      creator: {
        name: 'kennelclubdeployer.eth',
        address: '0x06d4b27c936edd3cea4d41d4ecd8bea83e6e4239',
        verified: true
      },
      price: {
        symbol: 'ETH',
        amount: 6.56,
        convertedAmount: 17688.27
      }
    }
  }
}) => {
  return (
    <>
      <RadialEffect />
      <Header />
      <div className="main-wrapper">
        <Container featuredItem={featured.type === 'item'}>
          <div className="welcome">
            <div>
              <Heading size="lg">
                Create, Sell and Collect Digital NFT Items
              </Heading>
              <Text>
                The world&apos;s best and safest nft marketplace with ethereum
                currency.
              </Text>
              <div className="buttons-container">
                <Button variant="primary" size="md" icon={faRocket}>
                  Explore
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  outlined
                  icon={faPlusCircle}
                >
                  Create
                </Button>
              </div>
              <div className="top-bid-container">
                <Text size="md" className="section-title">
                  Today&#39;s top bid <img src="/icons/medal.svg" />
                </Text>
                <div className="bid">
                  <Avatar
                    src={currentBid.creator.avatarUrl}
                    alt="Creator avatar"
                    size="sm"
                    verified={currentBid.creator.verified}
                    title={truncateAddress(currentBid.creator.address)}
                  />
                  <div className="info">
                    <Text size="xs">Current Bid</Text>
                    <div className="value">
                      <FontAwesomeIcon
                        icon={faEthereum as IconProp}
                        className="fa"
                      />
                      <Text size="lg" weight="bold" className="amount">
                        {`${currentBid.price.amount} ${currentBid.price.symbol}`}
                      </Text>
                      <Text size="md">
                        {`= ${currencyFormat(
                          currentBid.price.convertedAmount
                        )}`}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="featured">
              <Text size="md" className="section-title">
                {`Featured ${featured.type}`}{' '}
                <img src="/icons/fire.svg" className="fire" />
              </Text>
              <div className="image-container">
                {featured.item ? (
                  <Link href="#">
                    <img
                      key={featured.item?.image}
                      src={featured.item?.image}
                      alt="Featured item"
                      className={'image-1'}
                    />
                  </Link>
                ) : (
                  featured.collection?.images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt="Featured collection"
                      className={`image-${index + 1}`}
                    />
                  ))
                )}
                <div className="card">
                  <div>
                    <div className="title">
                      <Text size="md" weight="medium">
                        <Link href="#">
                          {featured.item?.name || featured.collection?.name}
                        </Link>
                      </Text>
                      {featured.collection?.verified && (
                        <VerifiedIcon size="xs" />
                      )}
                    </div>
                    <div className="creator">
                      <Text size="xs">
                        Created by{' '}
                        <Link href="#">
                          {featured.item &&
                            (featured.item.creator.name ||
                              truncateAddress(featured.item.creator.address))}
                          {featured.collection &&
                            (featured.collection.creator.name ||
                              truncateAddress(
                                featured.collection.creator.address
                              ))}
                        </Link>
                      </Text>
                      {featured.item && featured.item.creator.verified && (
                        <VerifiedIcon size="xxs" className="verified-icon" />
                      )}
                      {featured.collection &&
                        featured.collection.creator.verified && (
                          <VerifiedIcon size="xxs" className="verified-icon" />
                        )}
                    </div>
                  </div>
                  {featured.item?.countdownDate && (
                    <CountDown
                      date={featured.item.countdownDate || ''}
                      className="countdown"
                    />
                  )}
                  <div>
                    <div className="price-container">
                      {featured.item?.onSale && (
                        <Text size="xs">Current price</Text>
                      )}
                      {featured.item?.onAuction && !featured.item?.onSale && (
                        <Text size="xs">Minimum bid</Text>
                      )}
                      {featured.item?.openOffers &&
                        !featured.item?.onSale &&
                        !featured.item?.onAuction && (
                          <Text size="xs">Current bid</Text>
                        )}
                      {featured.collection && (
                        <Text size="xs">Floor price</Text>
                      )}
                      <div className="value">
                        <FontAwesomeIcon
                          icon={faEthereum as IconProp}
                          className="fa"
                        />
                        <Text size="lg" weight="bold" className="amount">
                          {featured.item &&
                            `${featured.item.price.amount} ${featured.item.price.symbol}`}
                          {featured.collection &&
                            `${featured.collection.price.amount} ${featured.collection.price.symbol}`}
                        </Text>
                        <Text size="md" className="converted-amount">
                          {featured.item &&
                            `= ${currencyFormat(
                              featured.item.price.convertedAmount
                            )}`}
                          {featured.collection &&
                            `= ${currencyFormat(
                              featured.collection.price.convertedAmount
                            )}`}
                        </Text>
                      </div>
                    </div>
                    {featured.item?.onSale && (
                      <Button
                        variant="primary"
                        size="md"
                        icon={faEthereum as IconProp}
                      >
                        Buy now
                      </Button>
                    )}
                    {featured.item &&
                      !featured.item.onSale &&
                      (featured.item.onAuction || featured.item.openOffers) && (
                        <Button
                          variant="primary"
                          size="md"
                          icon={faShoppingBasket}
                        >
                          Place bid
                        </Button>
                      )}
                    {featured.collection && (
                      <Button
                        variant="primary"
                        size="md"
                        icon={faShoppingBasket}
                      >
                        Place bid
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Home
