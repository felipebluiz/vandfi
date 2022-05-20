import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import {
  faClone,
  faEdit,
  faHeart,
  faTags,
  faThLarge,
  faTimes,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Modal, ModalHandle } from '@/components/Modal'
import { Avatar } from '@/components/Avatar'
import { IconButton } from '@/components/IconButton'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { truncateAddress } from '../../utils'

import { Container } from './styles'

interface ProfileModalProps {
  profileModalIsOpen: boolean
  setProfileModalIsOpen: (value: boolean) => void
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  profileModalIsOpen,
  setProfileModalIsOpen
}) => {
  const router = useRouter()
  const modalRef = useRef<ModalHandle>(null)
  const [walletAddress] = useState('0x06D4b27c936EDD3CEA4d41d4eCd8bea83e6e4239')

  return (
    <Modal
      ref={modalRef}
      width="360"
      position="right"
      full
      hideHeader
      hideActions
      modalIsOpen={profileModalIsOpen}
      setModalIsOpen={setProfileModalIsOpen}
    >
      <Container>
        <header>
          <div
            tabIndex={0}
            role="button"
            className="profile-container"
            onClick={() => router.replace('/profile')}
          >
            <Avatar
              src="/images/avatar.png"
              size="sm"
              className="avatar"
              verified
            />
            <div className="profile-info-container">
              <Text size="md" weight="bold" className="wallet-address">
                {truncateAddress(walletAddress, 12)}
              </Text>
              <Text size="sm" className="link">
                View profile
              </Text>
            </div>
          </div>
          <IconButton
            icon={faTimes}
            variant="secundary"
            size="md"
            className="close-button"
            onClick={() => modalRef.current?.closeModal()}
          />
        </header>
        <div className="crypto-container">
          <div className="item-container">
            <div className="eth">
              <FontAwesomeIcon icon={faEthereum as IconProp} className="fa" />
            </div>
            <div className="info-container">
              <Text size="sm" className="crypto">
                Ethereum
              </Text>
              <Text size="md" weight="bold" className="amount">
                0 ETH
              </Text>
            </div>
          </div>
          <div className="item-container">
            <div className="weth">
              <FontAwesomeIcon icon={faEthereum as IconProp} className="fa" />
            </div>
            <div className="info-container">
              <Text size="sm" className="crypto">
                Wrapped Ethereum
              </Text>
              <Text size="md" weight="bold" className="amount">
                0 wETH
              </Text>
            </div>
          </div>
        </div>
        <div className="navigation-container">
          <ul>
            <li>
              <Link href="/profile/edit">
                <a>
                  <FontAwesomeIcon icon={faEdit} className="fa" />
                  Edit profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile?tab=owned">
                <a>
                  <FontAwesomeIcon icon={faClone} className="fa" />
                  My Items
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile?tab=collections">
                <a>
                  <FontAwesomeIcon icon={faThLarge} className="fa" />
                  My Collections
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile?tab=favorites">
                <a>
                  <FontAwesomeIcon icon={faHeart} className="fa" />
                  Favorites
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile?tab=offers">
                <a>
                  <FontAwesomeIcon icon={faTags} className="fa" />
                  Offers
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Button
          icon={faSignOutAlt}
          variant="secundary"
          size="md"
          outlined
          full
          className="logout-button"
        >
          Disconnect
        </Button>
      </Container>
    </Modal>
  )
}
