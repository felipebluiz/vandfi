import React, { useState } from 'react'
import { FaWallet, FaSearch, FaTimes, FaBars } from 'react-icons/fa'
import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { Search } from '@/components/Search'

import { Container } from './styles'

const Header: React.FC = () => {
  const [loggedIn] = useState(true)
  const [navigationVisibility, setNavigationVisibility] = useState(true)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const [searchPosition, setSearchPosition] = useState(false)

  const showSearch = () => {
    setNavigationVisibility(false)
    setSearchVisibility(true)
    setSearchPosition(true)
  }

  const hideSearch = () => {
    setSearchVisibility(false)

    setTimeout(() => {
      setNavigationVisibility(true)
      setSearchPosition(false)
    }, 350)
  }

  return (
    <Container
      loggedIn={loggedIn}
      navigationVisibility={navigationVisibility}
      searchVisibility={searchVisibility}
      searchPosition={searchPosition}
    >
      <div className="main-wrapper">
        <Logo animation={true} />
        <button
          type="button"
          className="mobile-button search-button"
          onClick={!searchVisibility ? showSearch : hideSearch}
        >
          {!searchVisibility && <FaSearch className="fa fa-search" />}
          {searchVisibility && <FaTimes className="fa fa-times" />}
        </button>
        <button type="button" className="mobile-button navigation-button">
          <FaBars className="fa fa-search" />
        </button>
        <Search />
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
          <button type="button" className="connect-wallet">
            <FaWallet className="fa fa-search" />
            <span>Connect Wallet</span>
          </button>
        )}
        {loggedIn && (
          <button type="button" className="avatar-container">
            <div className="avatar">
              <img src="/images/avatar.png" alt="User Avatar" />
            </div>
          </button>
        )}
      </div>
    </Container>
  )
}

export { Header }
