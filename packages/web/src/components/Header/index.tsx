import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  faWallet,
  faBars,
  faSearch,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import { Logo } from '@/components/Logo'
import { SearchModal } from '@/components/SearchModal'
import { NavigationModal } from '@/components/NavigationModal'
import { ProfileModal } from '@/components/ProfileModal'
import { ConnectWalletModal } from '../ConnectWalletModal'
import { SearchInput, SearchInputHandle } from '@/components/SearchInput'
import { Avatar } from '@/components/Avatar'
import { IconButton } from '@/components/IconButton'
import { Button } from '@/components/Button'

import { Container } from './styles'

export const Header: React.FC = () => {
  const [loggedIn] = useState(false)
  const [navigationVisibility, setNavigationVisibility] = useState(true)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [searchPosition, setSearchPosition] = useState(false)
  const [searchContainerPadding, setSearchContainerPadding] = useState(false)
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false)
  const [navigationModalIsOpen, setNavigationModalIsOpen] = useState(false)
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false)
  const [connectWalletModalIsOpen, setConnectWalletModalIsOpen] =
    useState(false)
  const searchInputRef = useRef<SearchInputHandle>(null)
  const router = useRouter()

  const showSearch = () => {
    setNavigationVisibility(false)
    setSearchVisibility(true)
    setSearchPosition(true)
    setSearchContainerPadding(true)

    searchInputRef.current?.setInputFocus()
  }

  const hideSearch = () => {
    searchInputRef.current?.clearSearchInput()

    setSearchVisibility(false)
    setSearchContainerPadding(false)

    setTimeout(() => {
      setNavigationVisibility(true)
      setSearchPosition(false)
    }, 350)
  }

  return (
    <>
      <Container
        loggedIn={loggedIn}
        navigationVisibility={navigationVisibility}
        searchVisibility={searchVisibility}
        searchPosition={searchPosition}
        searchContainerPadding={searchContainerPadding}
      >
        <div className="main-wrapper">
          <Logo />
          <IconButton
            icon={!searchVisibility ? faSearch : faTimes}
            variant="secundary"
            size="md"
            className="search-button"
            onClick={!searchVisibility ? showSearch : hideSearch}
          />
          <SearchInput
            ref={searchInputRef}
            setSearchModalIsOpen={hideSearch}
            placeholder="Search items, collections or creators"
          />
          <div className="navigation-container">
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
              <li
                className={router.pathname === '/how-it-works' ? 'active' : ''}
              >
                <Link href="/how-it-works">
                  <a>How it works</a>
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.vandfi.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </a>
              </li>
              <li className={router.pathname === '/create' ? 'active' : ''}>
                <Link href="/create">
                  <a>Create</a>
                </Link>
              </li>
            </ul>
          </div>
          <IconButton
            icon={faSearch}
            variant="secundary"
            size="md"
            className="mobile-button navigation-button"
            onClick={() => setSearchModalIsOpen(!searchModalIsOpen)}
          />
          <IconButton
            icon={faBars}
            variant="secundary"
            size="md"
            className="navigation-button"
            onClick={() => setNavigationModalIsOpen(!navigationModalIsOpen)}
          />
          {loggedIn && (
            <Avatar
              src="/images/avatar.png"
              size="sm"
              className="avatar"
              verified
              onClick={() => setProfileModalIsOpen(true)}
            />
          )}
          {!loggedIn && (
            <Button
              variant="primary"
              size="md"
              icon={faWallet}
              className="connect-wallet"
              onClick={() => setConnectWalletModalIsOpen(true)}
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </Container>
      {searchModalIsOpen && (
        <SearchModal
          searchModalIsOpen={searchModalIsOpen}
          setSearchModalIsOpen={setSearchModalIsOpen}
        />
      )}
      {navigationModalIsOpen && (
        <NavigationModal
          loggedIn={loggedIn}
          navigationModalIsOpen={navigationModalIsOpen}
          setNavigationModalIsOpen={setNavigationModalIsOpen}
        />
      )}
      {profileModalIsOpen && (
        <ProfileModal
          profileModalIsOpen={profileModalIsOpen}
          setProfileModalIsOpen={setProfileModalIsOpen}
        />
      )}
      {connectWalletModalIsOpen && (
        <ConnectWalletModal
          connectWalletModalIsOpen={connectWalletModalIsOpen}
          setConnectWalletModalIsOpen={setConnectWalletModalIsOpen}
        />
      )}
    </>
  )
}
