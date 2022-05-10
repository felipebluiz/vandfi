import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  faWallet,
  faBars,
  faSearch,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import { Logo } from '@/components/Logo'
import { SearchModal } from '@/components/Modal/Search'
import { SearchInput, SearchInputHandle } from '@/components/SearchInput'
import { Avatar } from '@/components/Avatar'
import { IconButton } from '@/components/IconButton'
import { Button } from '@/components/Button'

import { Container } from './styles'

export const Header: React.FC = () => {
  const [loggedIn] = useState(true)
  const [navigationVisibility, setNavigationVisibility] = useState(true)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [searchPosition, setSearchPosition] = useState(false)
  const [searchContainerPadding, setSearchContainerPadding] = useState(false)
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false)
  const searchInputRef = useRef<SearchInputHandle>(null)
  const router = useRouter()

  const showSearch = () => {
    setNavigationVisibility(false)
    setSearchVisibility(true)
    setSearchPosition(true)
    setSearchContainerPadding(true)
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

  useEffect(() => {
    if (searchModalIsOpen) {
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = 'auto'
    }
  }, [searchModalIsOpen])

  return (
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
              <a href="/activity">Activity</a>
            </li>
            <li className={router.pathname === '/how-it-works' ? 'active' : ''}>
              <a href="/how-it-works">How it works</a>
            </li>
            <li className={router.pathname === '/blog' ? 'active' : ''}>
              <a href="/blog">Blog</a>
            </li>
            <li className={router.pathname === '/create' ? 'active' : ''}>
              <a href="/create">Create</a>
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
        />
        {loggedIn && (
          <Avatar
            src="/images/avatar.png"
            size="sm"
            className="avatar"
            verified
          />
        )}
        {!loggedIn && (
          <Button
            variant="primary"
            size="md"
            icon={faWallet}
            className="connect-wallet"
          >
            Connect Wallet
          </Button>
        )}
      </div>
      {searchModalIsOpen && (
        <SearchModal setSearchModalIsOpen={setSearchModalIsOpen} />
      )}
    </Container>
  )
}
