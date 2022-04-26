import React, { useState, useRef, useEffect } from 'react'
import { FaWallet, FaSearch, FaTimes, FaBars } from 'react-icons/fa'
import Link from 'next/link'

import { Logo } from '@/components/Logo'
import SearchInput, { SearchInputHandle } from '@/components/SearchInput'
import { SearchModal } from '@/components/Modal/Search'

import { Container } from './styles'

const Header: React.FC = () => {
  const [loggedIn] = useState(false)
  const [navigationVisibility, setNavigationVisibility] = useState(true)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [searchPosition, setSearchPosition] = useState(false)
  const [searchContainerPadding, setSearchContainerPadding] = useState(false)
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false)
  const searchInputRef = useRef<SearchInputHandle>(null)

  const showSearch = () => {
    setNavigationVisibility(false)
    setSearchVisibility(true)
    setSearchPosition(true)
    setSearchContainerPadding(true)
  }

  const hideSearch = () => {
    searchInputRef.current.clearSearchInput()

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
        <Logo animation={true} />
        <button
          type="button"
          className="search-button"
          onClick={!searchVisibility ? showSearch : hideSearch}
        >
          {!searchVisibility && <FaSearch className="fa fa-search" />}
          {searchVisibility && <FaTimes className="fa fa-times" />}
        </button>
        <SearchInput
          ref={searchInputRef}
          setSearchModalIsOpen={hideSearch}
          placeholder="Search items, collections or creators"
        />
        <div className="navigation-container">
          <ul>
            <li>
              <Link href="/explore">
                <a>Explore</a>
              </Link>
            </li>
            <li>
              <a href="/activity">Activity</a>
            </li>
            <li>
              <a href="/how-it-works">How it works</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/create">Create</a>
            </li>
          </ul>
        </div>
        {!loggedIn && (
          <button
            type="button"
            className="button-medium button-primary connect-wallet"
          >
            <FaWallet className="fa fa-search" />
            <span>Connect Wallet</span>
          </button>
        )}
        <button
          type="button"
          className="mobile-button navigation-button"
          onClick={() => setSearchModalIsOpen(!searchModalIsOpen)}
        >
          <FaSearch className="fa fa-search" />
        </button>
        <button type="button" className="mobile-button navigation-button">
          <FaBars className="fa fa-bars" />
        </button>
        {loggedIn && (
          <button type="button" className="avatar-container">
            <div className="avatar">
              <img src="/images/avatar.png" alt="User Avatar" />
            </div>
          </button>
        )}
      </div>
      {searchModalIsOpen && (
        <SearchModal setSearchModalIsOpen={setSearchModalIsOpen} />
      )}
    </Container>
  )
}

export { Header }
