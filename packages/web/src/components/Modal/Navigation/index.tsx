import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { faWallet, faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDiscord,
  faYoutube,
  faTiktok
} from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Logo } from '@/components/Logo'
import { IconButton } from '@/components/IconButton'
import { Button } from '@/components/Button'

import { StyledModal, Container } from './styles'

type SearchModalProps = React.ComponentProps<typeof StyledModal> & {
  loggedIn: boolean
  setNavigationModalIsOpen: (value: boolean) => void
}

export const NavigationModal: React.FC<SearchModalProps> = ({
  loggedIn,
  setNavigationModalIsOpen
}) => {
  const router = useRouter()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [socailLinks] = useState({
    facebook: 'https://www.facebook.com/vandfi',
    twitter: 'https://twitter.com/vandfi/',
    instagram: 'https://www.instagram.com/vandfi/',
    discord: 'https://discord.gg/FWFQvaXz',
    youtube: 'https://www.youtube.com/channel/UCBRLq3Y7YkG5xb_j27V4Y6Q',
    tiktok: 'https://www.tiktok.com/@vandfi.com'
  })

  const closeModal = () => {
    setModalIsOpen(false)
    setTimeout(() => setNavigationModalIsOpen(false), 200)
  }

  useEffect(() => {
    setModalIsOpen(true)
  }, [])

  return (
    <StyledModal opacity={modalIsOpen}>
      <Container>
        <div className="header">
          <Logo />
          <IconButton
            icon={faTimes}
            variant="secundary"
            size="md"
            onClick={closeModal}
          />
        </div>
        <div className="content">
          <ul>
            <li className={router.pathname === '/explore' ? 'active' : ''}>
              <Link href="/explore">
                <a>Explore</a>
              </Link>
            </li>
            <li className={router.pathname === '/activity' ? 'active' : ''}>
              <a href="/activity">Activity</a>
            </li>
            <li className={router.pathname === '/how-it-works' ? 'active' : ''}>
              <a href="/how-it-works">How it works</a>
            </li>
            <li className={router.pathname === '/blog' ? 'active' : ''}>
              <a href="/blog">Blog</a>
            </li>
            <li className={router.pathname === '/create' ? 'active' : ''}>
              <a href="/create" className="highlight">
                Create
              </a>
            </li>
          </ul>
        </div>
        <div className="footer">
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
            <IconButton
              icon={faTiktok as IconProp}
              variant="secundary"
              size="md"
              radius="semiRounded"
              onClick={() => window.open(socailLinks.tiktok, '_blank')}
            />
          </div>
        </div>
      </Container>
    </StyledModal>
  )
}
