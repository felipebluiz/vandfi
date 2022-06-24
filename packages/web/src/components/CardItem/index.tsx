import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faHistory,
  faShoppingBasket
} from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Spinner } from '@/components/Spinner'
import { Avatar } from '@/components/Avatar'
import { CountDown } from '@/components/Countdown'
import { truncateAddress } from 'src/utils'
import { Item } from 'src/pages/home/index.page'

import { StyledCard } from './styles'

type CardItemProps = React.ComponentProps<typeof StyledCard> & {
  item: Item
}

export const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return (
    <StyledCard className="card-item">
      <div className="image-container">
        <Button
          custom
          variant="tertiary"
          size="md"
          radius="semiRounded"
          icon={faHeart}
          className="like-button"
        >
          {item.liked ? (
            <img src="/icons/heart.svg" className="fa" />
          ) : (
            <img src="/icons/heart-outline.svg" className="fa" />
          )}
          <span>{item.likes}</span>
          <Spinner className="spinner" />
        </Button>
        <Link href="#">
          <img
            key={item.image}
            src={item.image}
            alt="Featured item"
            className={'image-1'}
            draggable="false"
          />
        </Link>
        {item.countdownDate && (
          <CountDown date={item.countdownDate} className="countdown" />
        )}
      </div>
      <div className="content-container">
        <Text size="md" weight="medium">
          <Link href="#">{item.name}</Link>
        </Text>
        <div className="info">
          <div className="owner">
            <Avatar
              src={item.creator.avatarUrl}
              alt="Creator avatar"
              size="xs"
              verified={item.creator.verified}
              className="avatar"
            />
            <div>
              <Text size="xs">Owned by</Text>
              <Text size="xs" className="owner-name">
                <Link href="#">
                  {item.creator.name || truncateAddress(item.creator.address)}
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
              <Text size="md" weight="medium" className="amount">
                {`${item.price.amount} ${item.price.symbol}`}
              </Text>
            </div>
          </div>
        </div>
        <div className="actions">
          {item.onSale && (
            <Button variant="primary" size="md" icon={faEthereum as IconProp}>
              Buy now
            </Button>
          )}
          {!item.onSale && (item.onAuction || item.openOffers) && (
            <Button variant="primary" size="md" icon={faShoppingBasket}>
              Place bid
            </Button>
          )}
          <Button
            variant="tertiary"
            size="md"
            icon={faHistory}
            className="history-button"
          >
            View history
          </Button>
        </div>
      </div>
    </StyledCard>
  )
}
