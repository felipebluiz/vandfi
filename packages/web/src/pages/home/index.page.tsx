/* eslint-disable indent */
import React, { useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusCircle,
  faRocket,
  faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { Carousel } from '@/components/Carousel'
import { CardItem } from '@/components/CardItem'
import { VerifiedIcon } from '@/components/VerifiedIcon'
import { CountDown } from '@/components/Countdown'
import { Footer } from '@/components/Footer'
import { ConnectWalletModal } from '@/components/ConnectWalletModal'
import { truncateAddress, currencyFormat, numberFormat } from '@/global/utils'
import { Item, User, Collection, Price } from '@/global/types'
import {
  editorsPick as editorsPickMock,
  popularCollections as popularCollectionsMock,
  featuredArticles as featuredArticlesMock,
  saleTips
} from '../../__mocks__'

import { RadialEffect } from '@/assets/styles/global'
import { Container } from './styles'

interface CurrentBid {
  user: User
  price: Price
}

interface Featured {
  type: string
  item?: Item
  collection?: Collection
}

interface Article {
  title: string
  image: string
  link: string
}

interface HomeProps {
  currentBid: CurrentBid
  featured: Featured
  editorsPick: Item[]
  popularCollections: Collection[]
  featuredArticles: Article[]
}

const Home: React.FC<HomeProps> = ({
  currentBid = {
    user: {
      avatarUrl: '/images/avatar.png',
      address: '0x06d4b27c936edd3cea4d41d4ecd8bea83e6e4239',
      verified: true
    },
    price: {
      currencySymbol: 'wETH',
      amount: 10.5,
      convertedAmount: 2688.27
    }
  },
  featured = {
    type: 'collection',
    collection: {
      images: [
        'https://lh3.googleusercontent.com/FTAAPfa6MKr6XYbYVeeP_aJz32hh2U7m15M0fCkr1Vak5Ok8zYcNdVl6F5GjpTfr7YkmqnEwfsaiNgeB9TBkBZ5E4DdunGAqG6pFjg=s500',
        'https://lh3.googleusercontent.com/bwkx4emeXN01xbh9bLgXTQWZAo1pFxnQSDO60vY4v8lIKYM3dx4k9l3MEuQBZ3AOkoMEhNKtYqEdWMxTnQw8o6RrvxtFiZh3DcWD6g=s500',
        'https://lh3.googleusercontent.com/pISJ0ieQLyGnGmdGjkujsyfHmEVSpamFsiqW9kSISawBsgFG_riGFjPPouH8_LGmo16pEKu7GiSxuH-O1VfYa7P10NEyglueF8Kq=s500'
      ],
      name: 'BoredApeKennelClub',
      verified: true,
      creator: {
        name: 'kennelclubdeployer.eth',
        address: '0x06d4b27c936edd3cea4d41d4ecd8bea83e6e4239',
        verified: true
      },
      floorPrice: {
        currencySymbol: 'ETH',
        amount: 6.56,
        convertedAmount: 17688.27
      }
    }
  },
  editorsPick = editorsPickMock,
  popularCollections = popularCollectionsMock,
  featuredArticles = featuredArticlesMock
}) => {
  const [connectWalletModalIsOpen, setConnectWalletModalIsOpen] =
    useState(false)

  const handleCheckout = () => {
    setConnectWalletModalIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Vandfi</title>
      </Head>
      <RadialEffect />
      <Header />
      <div className="main-wrapper">
        <Container featuredItem={featured.type === 'item'}>
          <section className="welcome">
            <div>
              <Heading size="lg">
                Create, Sell and Collect Digital NFT Items
              </Heading>
              <Text>
                The world&apos;s best and safest nft marketplace with ethereum
                currency.
              </Text>
              <div className="buttons-container">
                <Button variant="primary" size="lg" icon={faRocket}>
                  Explore
                </Button>
                <Button
                  variant="primary"
                  size="lg"
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
                    src={currentBid.user.avatarUrl}
                    alt="User avatar"
                    size="sm"
                    verified={currentBid.user.verified}
                    title={
                      currentBid.user.name ||
                      truncateAddress(currentBid.user.address)
                    }
                  />
                  <div className="info">
                    <Text size="xs">Current bid</Text>
                    <div className="value">
                      <FontAwesomeIcon
                        icon={faEthereum as IconProp}
                        className="fa"
                      />
                      <Text size="lg" weight="bold" className="amount">
                        {`${currentBid.price.amount} ${currentBid.price.currencySymbol}`}
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
                      alt="Featured collection item"
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
                    <div className="user">
                      <Text size="xs">
                        {featured.item && (
                          <>
                            Owned by{' '}
                            <Link href="#">
                              {featured.item &&
                                (featured.item.owner.name ||
                                  truncateAddress(featured.item.owner.address))}
                            </Link>
                          </>
                        )}
                        {featured.collection && (
                          <>
                            Created by{' '}
                            <Link href="#">
                              {featured.collection &&
                                (featured.collection.creator.name ||
                                  truncateAddress(
                                    featured.collection.creator.address
                                  ))}
                            </Link>
                          </>
                        )}
                      </Text>
                      {featured.item && featured.item.owner.verified && (
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
                            featured.item.onSale &&
                            `${featured.item.price?.amount} ${featured.item.price?.currencySymbol}`}
                          {featured.item &&
                            !featured.item.onSale &&
                            `${featured.item.bid?.amount} ${featured.item.bid?.currencySymbol}`}
                          {featured.collection &&
                            `${featured.collection.floorPrice.amount} ${featured.collection.floorPrice.currencySymbol}`}
                        </Text>
                        <Text size="md" className="converted-amount">
                          {featured.item &&
                            `= ${currencyFormat(
                              featured.item.onSale
                                ? featured.item.price?.convertedAmount || 0
                                : featured.item.bid?.convertedAmount || 0
                            )}`}
                          {featured.collection &&
                            `= ${currencyFormat(
                              featured.collection.floorPrice.convertedAmount
                            )}`}
                        </Text>
                      </div>
                    </div>
                    {featured.item?.onSale && (
                      <Button
                        variant="primary"
                        size="md"
                        icon={faEthereum as IconProp}
                        onClick={handleCheckout}
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
                          onClick={handleCheckout}
                        >
                          Place a bid
                        </Button>
                      )}
                    {featured.collection && (
                      <Button
                        variant="primary"
                        size="md"
                        icon={faShoppingBasket}
                        onClick={handleCheckout}
                      >
                        Place a bid
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="editors-pick">
            <Heading size="md">Editors Pick For This Week</Heading>
            <Carousel>
              {editorsPick.map(item => (
                <CardItem
                  key={`${item.collection.address}:${item.tokenId}`}
                  item={item as Item}
                />
              ))}
            </Carousel>
          </section>
          <section className="sale-tips">
            <Heading size="md">Create and Sell your NFTs</Heading>
            <div className="tips">
              {saleTips.map((tip, index) => (
                <div key={index.toString()} className="tips-item">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={tip.icon} className="fa" />
                    <Text size="sm">{index + 1}</Text>
                  </div>
                  <Text size="lg" weight="medium" className="title">
                    {tip.title}
                  </Text>
                  <Text className="description">{tip.description}</Text>
                </div>
              ))}
            </div>
          </section>
          <section className="popular-collections">
            <Heading size="md">Popular Collections</Heading>
            <div className="collections">
              {popularCollections.map((collection, index) => (
                <div
                  key={collection.address}
                  tabIndex={0}
                  role="button"
                  className="collection-item"
                >
                  <Text weight="bold" className="position">
                    {(index + 1).toString()}
                  </Text>
                  <div>
                    <Avatar
                      src={collection.avatarUrl}
                      alt="Collection avatar"
                      size="sm"
                      verified={collection.verified}
                      clickable={false}
                    />
                    <div className="info-container">
                      <div>
                        <Text size="md" weight="medium" className="name">
                          {collection.name}
                        </Text>
                        <Text
                          size="sm"
                          className="trading-volume-percent green"
                        >
                          +76.16%
                        </Text>
                      </div>
                      <div>
                        <div className="floor-price">
                          <Text size="sm">Floor price:</Text>
                          <div className="crypto-amount">
                            <FontAwesomeIcon
                              icon={faEthereum as IconProp}
                              className="fa"
                            />
                            <Text size="sm">
                              {collection.floorPrice.amount}
                            </Text>
                          </div>
                        </div>
                        <div className="crypto-amount">
                          <FontAwesomeIcon
                            icon={faEthereum as IconProp}
                            className="fa"
                          />
                          <Text size="sm">
                            {numberFormat(collection.tradingVolume.amount)}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="primary" size="lg">
              Se all collections
            </Button>
          </section>
          <section className="featured-articles">
            <Heading size="md">Featured Articles</Heading>
            <Carousel className="article">
              <>
                {featuredArticles.map(article => (
                  <a
                    key={article.title}
                    href={article.link}
                    target="_blank"
                    rel="noreferrer"
                    draggable="false"
                    className="article"
                  >
                    <div className="image-container">
                      <img
                        src={article.image}
                        alt={article.title}
                        draggable="false"
                      />
                    </div>
                    <div className="content-container">
                      <Text size="md" weight="medium">
                        {article.title}
                      </Text>
                    </div>
                  </a>
                ))}
                <a
                  href="https://blog.vandfi.com"
                  target="_blank"
                  rel="noreferrer"
                  draggable="false"
                  className="article read-more"
                >
                  <Button variant="primary" size="lg">
                    Se all articles
                  </Button>
                </a>
              </>
            </Carousel>
          </section>
        </Container>
        <Footer />
      </div>
      {connectWalletModalIsOpen && (
        <ConnectWalletModal
          connectWalletModalIsOpen={connectWalletModalIsOpen}
          setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
        />
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 60 * 4
  }
}

export default Home
