import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { faWallet, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { Modal, ModalHandle } from '@/components/Modal'
import { Logo } from '@/components/Logo'
import { IconButton } from '@/components/IconButton'
import { Button } from '@/components/Button'

import { Container } from './styles'

interface NavigationModalProps {
  loggedIn: boolean
  navigationModalIsOpen: boolean
  setNavigationModalIsOpen: (value: boolean) => void
}

export const NavigationModal: React.FC<NavigationModalProps> = ({
  loggedIn,
  navigationModalIsOpen,
  setNavigationModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)
  const router = useRouter()
  const [socailLinks] = useState({
    facebook: 'https://www.facebook.com/vandfi',
    twitter: 'https://twitter.com/vandfi/',
    instagram: 'https://www.instagram.com/vandfi/',
    discord: 'https://discord.gg/FWFQvaXz',
    youtube: 'https://www.youtube.com/channel/UCBRLq3Y7YkG5xb_j27V4Y6Q'
  })

  return (
    <Modal
      ref={modalRef}
      hideHeader
      hideActions
      modalIsOpen={navigationModalIsOpen}
      setModalIsOpen={setNavigationModalIsOpen}
    >
      <Container>
        <header>
          <Logo />
          <IconButton
            icon={faTimes}
            variant="secundary"
            size="md"
            onClick={() => modalRef.current?.closeModal()}
          />
        </header>
        <div className="content">
          <ul>
            <li className={router.pathname === '/explore' ? 'active' : ''}>
              <Link href="/explore">
                <a>Explore</a>
              </Link>
            </li>
            <li className={router.pathname === '/activity' ? 'active' : ''}>
              <Link href="/activity">
                <a>Activity</a>
              </Link>
            </li>
            <li className={router.pathname === '/how-it-works' ? 'active' : ''}>
              <Link href="/how-it-works">
                <a>How it works</a>
              </Link>
            </li>
            <li className={router.pathname === '/blog' ? 'active' : ''}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className={router.pathname === '/create' ? 'active' : ''}>
              <Link href="/create">
                <a>Create</a>
              </Link>
            </li>
          </ul>
        </div>
        <footer>
          {!loggedIn && (
            <Button
              variant="primary"
              size="lg"
              icon={faWallet}
              full
              className="connect-wallet"
            >
              Connect Wallet
            </Button>
          )}
          <div className="socials-container">
            <IconButton
              icon={faFacebookF as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.facebook, '_blank')}
            />
            <IconButton
              icon={faTwitter as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.twitter, '_blank')}
            />
            <IconButton
              icon={faInstagram as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.instagram, '_blank')}
            />
            <IconButton
              icon={faDiscord as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.discord, '_blank')}
            />
            <IconButton
              icon={faYoutube as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.youtube, '_blank')}
            />
          </div>
        </footer>
      </Container>
    </Modal>
  )
}
