import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faHistory, faTag } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Avatar } from '@/components/Avatar'
import { CountDown } from '@/components/Countdown'
import { Tooltip } from '@/components/Tooltip'
import { ConnectWalletModal } from '@/components/ConnectWalletModal'
import { numberFormat, truncateAddress } from '@/global/utils'
import { Item } from '@/global/types'

import { StyledCard } from './styles'

type CardItemProps = React.ComponentProps<typeof StyledCard> & {
  item: Item
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const router = useRouter()
  const [connectWalletModalIsOpen, setConnectWalletModalIsOpen] =
    useState(false)

  const handleCheckout = () => {
    setConnectWalletModalIsOpen(true)
  }

  return (
    <>
      <StyledCard className="item">
        <div className="image-container">
          {item.rarity && (
            <Tooltip
              direction="bottom"
              content={`Rank ${numberFormat(
                item.rarity.position,
                'standard'
              )} of ${numberFormat(
                item.rarity.total,
                'standard'
              )} by Rarity Sniper`}
              className="buttons rarity"
            >
              <Button custom variant="tertiary" size="md">
                <img src="/icons/stars.svg" />
                <span>{`${numberFormat(
                  item.rarity.position,
                  'standard'
                )}`}</span>
              </Button>
            </Tooltip>
          )}
          <Link href={`/item/${item.collection.address}:${item.tokenId}`}>
            <img src={item.image} alt={item.name} draggable="false" />
          </Link>
          {item.countdownDate && (
            <CountDown date={item.countdownDate} className="countdown" />
          )}
        </div>
        <div className="content-container">
          <Text size="md" weight="medium">
            <Link href={`/item/${item.collection.address}:${item.tokenId}`}>
              {item.name}
            </Link>
          </Text>
          <div className="info">
            <div className="owner">
              <Avatar
                src={item.owner.avatarUrl}
                alt="Owner avatar"
                size="xs"
                verified={item.owner.verified}
                className="avatar"
              />
              <div>
                <Text size="xs">Owned by</Text>
                <Text size="xs" className="owner-name">
                  <Link href="#">
                    {item.owner.name || truncateAddress(item.owner.address)}
                  </Link>
                </Text>
              </div>
            </div>
            <div className="price">
              {item.onSale && <Text size="xs">Current price</Text>}
              {item.onAuction && !item.onSale && (
                <Text size="xs">Minimum bid</Text>
              )}
              {item.openOffers && !item.onSale && !item.onAuction && (
                <Text size="xs">Current bid</Text>
              )}
              <div className="value">
                <FontAwesomeIcon icon={faEthereum as IconProp} className="fa" />
                <Text size="md" weight="bold" className="amount">
                  {item.onSale
                    ? `${item.price?.amount} ${item.price?.currencySymbol}`
                    : `${item.bid?.amount} ${item.bid?.currencySymbol}`}
                </Text>
              </div>
            </div>
          </div>
          <div className="actions">
            {item.onSale && (
              <Button
                variant="primary"
                size="md"
                icon={faEthereum as IconProp}
                onClick={handleCheckout}
              >
                Buy now
              </Button>
            )}
            {!item.onSale && (item.onAuction || item.openOffers) && (
              <Button
                variant="primary"
                size="md"
                icon={faTag}
                onClick={handleCheckout}
              >
                Place a bid
              </Button>
            )}
            <Button
              variant="tertiary"
              size="md"
              icon={faHistory}
              className="history-button"
              onClick={() =>
                router.push(
                  `/item/${item.collection.address}:${item.tokenId}?tab=history`
                )
              }
            >
              View history
            </Button>
          </div>
        </div>
      </StyledCard>
      {connectWalletModalIsOpen && (
        <ConnectWalletModal
          connectWalletModalIsOpen={connectWalletModalIsOpen}
          setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
        />
      )}
    </>
  )
}
