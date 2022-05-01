import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaWallet, FaSearch, FaTimes, FaBars } from 'react-icons/fa'
import Link from 'next/link'

import { Logo } from '@/components/Logo'
import { SearchModal } from '@/components/Modal/Search'
import SearchInput, { SearchInputHandle } from '@/components/SearchInput'

import { Container } from './styles'

const Header: React.FC = () => {
  const [loggedIn] = useState(false)
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
      css={{
        '.main-wrapper': {
          gridTemplateColumns: loggedIn ? '1fr auto auto auto' : '1fr auto auto'
        },
        '@bp3': {
          '.search-container': {
            position: searchPosition ? 'relative' : 'absolute',
            form: {
              width: searchVisibility ? '100%' : '0px',
              padding: searchContainerPadding ? '4px' : '0',
              margin: searchContainerPadding ? '0' : '4px'
            }
          },
          '.navigation-container': {
            display: navigationVisibility ? 'initial' : 'none'
          }
        }
      }}
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
        {!loggedIn && (
          <button
            type="button"
            className="button-medium button-primary connect-wallet"
          >
            <FaWallet className="fa fa-search" />
            <span>Connect Wallet</span>
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
