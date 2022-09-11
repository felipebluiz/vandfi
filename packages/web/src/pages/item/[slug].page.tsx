/* eslint-disable indent */
import React, { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faShareAlt,
  faEllipsisH,
  faShoppingBasket,
  faCopy,
  faFlag,
  faSyncAlt,
  faUsers,
  faClone,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import {
  faEthereum,
  faFacebookF,
  faTwitter,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Header } from '@/components/Header'
import { Image } from '@/components/Image'
import { Button } from '@/components/Button'
import { IconButton } from '@/components/IconButton'
import { Spinner } from '@/components/Spinner'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Tooltip } from '@/components/Tooltip'
import { Dropdown } from '@/components/Dropdown'
import { Avatar } from '@/components/Avatar'
import { Footer } from '@/components/Footer'
import { ReportModal } from '@/components/ReportModal'
import { ItemOwnersModal } from '@/components/ItemOwnersModal'
import { Item } from '@/global/types'
import { useCountdown } from '@/hooks/useCountdown'
import { useToast } from '@/hooks/useToast'
import {
  countDownFormat,
  currencyFormat,
  numberFormat,
  truncateAddress
} from '@/global/utils'
import { editorsPick } from '../../__mocks__'

import { Container } from './styles'

interface ItemProps {
  item: Item
}

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  const [showShareDropdown, setShowShareDropdown] = useState(false)
  const [showMoreDropdown, setShowMoreDropdown] = useState(false)
  const [fullDescription, setFullDescription] = useState(false)
  const [showCountdown, setShowCountdown] = useState(false)
  const [reportModalIsOpen, setReportModalIsOpen] = useState(false)
  const [itemOwnersModalIsOpen, setItemOwnersModalIsOpen] = useState(false)
  const timeLeft = useCountdown(item.countdownDate || '')
  const toast = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(location.href)
    toast.success('Link copied successfully')
  }

  const refreshMetadata = () => {
    toast.success('Refreshing Metadata... It may take a few minutes')
  }

  useEffect(() => {
    if (item.onAuction) setShowCountdown(true)
  }, [item.onAuction])

  return (
    <>
      <Head>
        <title>{`${item.name} - ${item.collection.name} | Vandfi`}</title>
      </Head>
      <Header />
      <div className="main-wrapper">
        <Container multipleOwners={item.tokenStandard === 'ERC-1155'}>
          <div className="image-container">
            <Button custom variant="tertiary" size="md" className="like-button">
              {item.liked ? (
                <img src="/icons/heart.svg" className="fa" />
              ) : (
                <img src="/icons/heart-outline.svg" className="fa" />
              )}
              <span>{numberFormat(item.likes)}</span>
              <Spinner className="spinner" size="sm" />
            </Button>
            <Image
              width="633"
              height="633"
              borderRadius="15"
              alt={item.name}
              src={item.image}
              className="image-item"
            />
          </div>
          <div className="content-container">
            <Heading size="lg" weight="bold">
              {item.name}
            </Heading>
            <div className="actions-container">
              {item.tokenStandard === 'ERC-1155' && (
                <>
                  <Tooltip
                    direction="top"
                    content={
                      item.owners && item.owners > 1000
                        ? `${numberFormat(item.owners, 'standard')} Owners`
                        : ''
                    }
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      className="owners"
                      onClick={() => setItemOwnersModalIsOpen(true)}
                    >
                      <FontAwesomeIcon icon={faUsers} className="fa" />
                      <span>{`${numberFormat(item?.owners || 0)} Owners`}</span>
                    </div>
                  </Tooltip>
                  <Tooltip
                    direction="top"
                    content={
                      item.editions && item.editions > 1000
                        ? `${numberFormat(item?.editions, 'standard')} Editions`
                        : ''
                    }
                  >
                    <div className="editions">
                      <FontAwesomeIcon icon={faClone} className="fa" />
                      <span>{`${numberFormat(
                        item?.editions || 0
                      )} Editions`}</span>
                    </div>
                  </Tooltip>
                </>
              )}
              <Tooltip
                direction="top"
                content={
                  item.likes > 1000
                    ? `${numberFormat(item.likes, 'standard')} Favorites`
                    : ''
                }
              >
                <div className="favorites">
                  <img src="/icons/heart-regular.svg" className="fa" />
                  <span>{`${numberFormat(item.likes)} Favorites`}</span>
                </div>
              </Tooltip>
              <Dropdown
                setShowDropdown={setShowShareDropdown}
                showDropdown={showShareDropdown}
              >
                <Tooltip direction="top" content="Share">
                  <IconButton
                    variant="secundary"
                    size="md"
                    icon={faShareAlt}
                    className="share-button"
                    onClick={() =>
                      setShowShareDropdown(prevState => !prevState)
                    }
                  />
                </Tooltip>
                {showShareDropdown && (
                  <div className="dropdown-container">
                    <ul>
                      <li>
                        <button type="button" onClick={copyToClipboard}>
                          <FontAwesomeIcon icon={faCopy} className="fa" />
                          <span>Copy link</span>
                        </button>
                      </li>
                      <li>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${location.href}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faFacebookF as IconProp}
                            className="fa"
                          />
                          Share on Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href={`http://twitter.com/intent/tweet?text=Check out this item on Vandfi&url=${location.href}&via=vandfi`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faTwitter as IconProp}
                            className="fa"
                          />
                          Share on Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          href={`https://t.me/share/url?url=${location.href}&text=Check out this item on Vandfi`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faTelegram as IconProp}
                            className="fa"
                          />
                          Share on Telegram
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </Dropdown>
              <Dropdown
                setShowDropdown={setShowMoreDropdown}
                showDropdown={showMoreDropdown}
              >
                <Tooltip direction="top" content="More">
                  <IconButton
                    variant="secundary"
                    size="md"
                    icon={faEllipsisH}
                    className="more-button"
                    onClick={() => setShowMoreDropdown(prevState => !prevState)}
                  />
                </Tooltip>
                {showMoreDropdown && (
                  <div className="dropdown-container">
                    <ul>
                      <li>
                        <button type="button" onClick={refreshMetadata}>
                          <FontAwesomeIcon icon={faSyncAlt} className="fa" />
                          <span>Refresh Metadata</span>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => setReportModalIsOpen(true)}
                        >
                          <FontAwesomeIcon icon={faFlag} className="fa" />
                          <span>Report</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </Dropdown>
            </div>
            {item.description && (
              <Text size="md" className="description">
                {item.description.length > 230 ? (
                  <>
                    {fullDescription
                      ? item.description
                      : item.description.substring(0, 230).concat('...')}{' '}
                    <button
                      onClick={() =>
                        setFullDescription(prevState => !prevState)
                      }
                      className="show-more"
                    >
                      {fullDescription ? 'Show less' : 'Show more'}
                    </button>
                  </>
                ) : (
                  item.description
                )}
              </Text>
            )}
            <div className="info-container">
              {item.tokenStandard !== 'ERC-1155' && (
                <div tabIndex={0} role="button" className="owner">
                  <Avatar
                    src={item.owner.avatarUrl}
                    size="sm"
                    className="avatar-image"
                    verified={item.owner.verified}
                    clickable={false}
                  />
                  <div>
                    <Text size="xs" className="label">
                      Owned by
                    </Text>
                    <Text weight="medium" size="sm" className="value">
                      {item.owner?.name || truncateAddress(item.owner.address)}
                    </Text>
                  </div>
                </div>
              )}
              <div tabIndex={0} role="button" className="creator">
                <Avatar
                  src={item.creator.avatarUrl}
                  size="sm"
                  className="avatar-image"
                  verified={item.creator.verified}
                  clickable={false}
                />
                <div>
                  <Text size="xs" className="label">
                    Created by
                  </Text>
                  <Text weight="medium" size="sm" className="value">
                    {item.creator?.name ||
                      truncateAddress(item.creator.address)}
                  </Text>
                </div>
              </div>
              <div tabIndex={0} role="button" className="collection">
                <Avatar
                  src={item.collection.avatarUrl}
                  size="sm"
                  className="collection-image"
                  verified={item.collection.verified}
                  radius="semiRounded"
                  clickable={false}
                />
                <div>
                  <Text size="xs" className="label">
                    Collection
                  </Text>
                  <Text weight="medium" size="sm" className="value">
                    {item.collection.name}
                  </Text>
                </div>
              </div>
            </div>
            <div className="price-container">
              <div className="price">
                {item.onSale && (
                  <Text size="sm" weight="medium" className="label">
                    Current Price
                  </Text>
                )}
                {item.onAuction && !item.onSale && (
                  <Text size="sm" weight="medium" className="label">
                    Minimum Bid
                  </Text>
                )}
                {item.openOffers && !item.onSale && !item.onAuction && (
                  <Text size="sm" weight="medium" className="label">
                    Current Bid
                  </Text>
                )}
                <div className="separator" />
                <div className="value">
                  <FontAwesomeIcon
                    icon={faEthereum as IconProp}
                    className="fa"
                  />
                  <Text size="lg" weight="bold" className="amount">
                    {item.onSale
                      ? `${item.price?.amount} ${item.price?.currencySymbol}`
                      : `${item.bid?.amount} ${item.bid?.currencySymbol}`}
                  </Text>
                  <Text size="sm" className="convertedAmount">
                    {item.onSale
                      ? `= ${currencyFormat(item.price?.convertedAmount || 0)}`
                      : `= ${currencyFormat(item.bid?.convertedAmount || 0)}`}
                  </Text>
                </div>
              </div>
              {showCountdown && (
                <div className="countdown">
                  <Text size="sm" weight="medium" className="label">
                    Countdown
                  </Text>
                  <div className="separator" />
                  <div className="value">
                    <Text size="lg" weight="bold">
                      {countDownFormat(timeLeft)}
                    </Text>
                  </div>
                </div>
              )}
            </div>
            <div className="buttons-container">
              {item.onSale && (
                <Button
                  variant="primary"
                  size="lg"
                  custom
                  style={
                    item.onAuction || item.openOffers
                      ? {
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0
                        }
                      : {}
                  }
                >
                  <div className="icon-container ethereum">
                    <FontAwesomeIcon
                      icon={faEthereum as IconProp}
                      className="fa"
                    />
                  </div>
                  <span>Buy now</span>
                </Button>
              )}
              {(item.onAuction || item.openOffers) && (
                <Button
                  variant="tertiary"
                  size="lg"
                  custom
                  style={
                    item.onSale
                      ? {
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0
                        }
                      : {}
                  }
                >
                  <div className="icon-container shopping-basket">
                    <FontAwesomeIcon icon={faShoppingBasket} className="fa" />
                  </div>
                  <span>Place a bid</span>
                </Button>
              )}
            </div>
            <div className="unlockable-content">
              <FontAwesomeIcon icon={faLock} className="fa" />
              <div>
                <Text weight="medium" className="title">
                  Unlockable Content
                </Text>
                <Text size="sm">
                  This item has unlockable content that can only be accessible
                  by the item owner.
                </Text>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
      {reportModalIsOpen && (
        <ReportModal
          subtitle="Why do you think this item should be removed from our marketplace?"
          reportModalIsOpen={reportModalIsOpen}
          setReportModalIsOpen={setReportModalIsOpen}
        />
      )}
      {itemOwnersModalIsOpen && (
        <ItemOwnersModal
          itemOwnersModalIsOpen={itemOwnersModalIsOpen}
          setItemOwnersModalIsOpen={setItemOwnersModalIsOpen}
        />
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const slug = context.query.slug?.toString().split(':')

  if (!slug || slug.length !== 2 || !slug[0]?.length || !slug[1]?.length) {
    return {
      notFound: true
    }
  }

  const item = editorsPick.find(e => e.tokenId === slug[1])

  return {
    props: {
      item
    }
  }
}

export default ItemComponent
