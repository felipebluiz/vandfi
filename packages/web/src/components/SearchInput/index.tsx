/* eslint-disable indent */
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { FaRocket, FaSearch, FaTimes } from 'react-icons/fa'

import { ContentLoader } from './ContentLoader'
import { searchResults } from '../../__mocks__'
import { truncateAddress, numberFormat } from '../../utils'

import { Container } from './styles'

export interface SearchInputHandle {
  setInputFocus: () => void
  clearSearchInput: () => void
}

interface SearchInputProps {
  setSearchModalIsOpen?: (value: boolean) => void
  placeholder: string
}

interface ItemsProps {
  id: string
  avatarUrl: string
  name: string
  saleType: string
}

interface CollectionProps {
  id: string
  avatarUrl: string
  name: string
  creatorAddress: string
}

interface CreatorProps {
  id: string
  avatarUrl: string
  name: string
  followersQtd: number
}

const SearchInput = forwardRef<SearchInputHandle, SearchInputProps>(
  ({ setSearchModalIsOpen, placeholder }, ref) => {
    const router = useRouter()
    const { register, watch, resetField, setFocus, handleSubmit } = useForm()
    const searchFormRef = useRef<HTMLFormElement>()
    const searchResultsRef = useRef<HTMLDivElement>()
    const searchValue = watch('searchValue')
    const [searchResultsIsOpen, setSearchResultsIsOpen] = useState(false)
    const [items, setItems] = useState(undefined)
    const [collections, setCollections] = useState(undefined)
    const [creators, setCreators] = useState(undefined)
    const [loading, setLoading] = useState(false)

    const goToExplorePage = () => {
      router.replace('/explore')

      setSearchModalIsOpen(false)
    }

    const onSearchInputFocus = () => {
      if (!searchResultsIsOpen && (items || collections || creators)) {
        setSearchResultsIsOpen(true)
      }
    }

    const onSubmit = () => {
      console.log(searchValue)
    }

    const clearSearchInput = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()

      resetField('searchValue')
      setItems(undefined)
      setCollections(undefined)
      setCreators(undefined)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (
        searchResultsIsOpen &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(target) &&
        !searchFormRef.current.contains(target)
      ) {
        setSearchResultsIsOpen(false)
      }
    }

    useEffect(() => {
      if (searchValue) {
        setLoading(true)

        const timeout = setTimeout(() => {
          if (searchValue) {
            console.log(searchValue)

            setItems(searchResults.items)
            setCollections(searchResults.collections)
            setCreators(searchResults.creators)
            setLoading(false)
          }
        }, 500)

        return () => clearTimeout(timeout)
      } else {
        setItems(undefined)
        setCollections(undefined)
        setCreators(undefined)
        setLoading(false)
      }
    }, [searchValue])

    useEffect(() => {
      if (searchValue && !searchResultsIsOpen) setSearchResultsIsOpen(true)
      if (!searchValue && searchResultsIsOpen) setSearchResultsIsOpen(false)
    }, [searchValue])

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    useImperativeHandle(ref, () => ({
      setInputFocus() {
        setFocus('searchValue')
      },

      clearSearchInput() {
        resetField('searchValue')
        setItems(undefined)
        setCollections(undefined)
        setCreators(undefined)
      }
    }))

    return (
      <Container className="search-container">
        <form ref={searchFormRef} onSubmit={handleSubmit(onSubmit)}>
          <label>
            <FaSearch className="fa fa-search" />
            <input
              {...register('searchValue')}
              type="text"
              placeholder={placeholder}
              onFocus={onSearchInputFocus}
            />
            {searchValue && (
              <button type="button" onClick={clearSearchInput}>
                <FaTimes className="fa fa-times" />
              </button>
            )}
          </label>
        </form>
        {loading && <ContentLoader />}
        {!loading && searchResultsIsOpen && (
          <div ref={searchResultsRef} className="search-results-container">
            <div className="search-results">
              {items?.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Items</span>
                  </div>
                  <div className="section-list">
                    {items.map((item: ItemsProps, index: number) => (
                      <button type="button" key={item.id} className="list-item">
                        <img
                          src={item.avatarUrl}
                          alt="NFT item"
                          className="item-image"
                        />
                        <div
                          className="info-container"
                          style={index === 2 ? { borderBottom: 'none' } : {}}
                        >
                          <span className="name">{item.name}</span>
                          <span className="description">{item.saleType}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {collections?.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Collections</span>
                  </div>
                  <div className="section-list">
                    {collections.map(
                      (collection: CollectionProps, index: number) => (
                        <button
                          type="button"
                          key={collection.id}
                          className="list-item"
                        >
                          <img
                            src={collection.avatarUrl}
                            alt="Collection avatar"
                            className="collection-avatar"
                          />
                          <div
                            className="info-container"
                            style={index === 2 ? { borderBottom: 'none' } : {}}
                          >
                            <span className="name">{collection.name}</span>
                            <span className="description">
                              {`Created by ${truncateAddress(
                                collection.creatorAddress
                              )}`}
                            </span>
                          </div>
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
              {creators?.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Creators</span>
                  </div>
                  <div className="section-list">
                    {creators.map((creator: CreatorProps, index: number) => (
                      <button
                        type="button"
                        key={creator.id}
                        className="list-item"
                      >
                        <img
                          src={creator.avatarUrl}
                          alt="Creator avatar"
                          className="creator-avatar"
                        />
                        <div
                          className="info-container"
                          style={index === 2 ? { borderBottom: 'none' } : {}}
                        >
                          <span className="name">{creator.name}</span>
                          <span className="description">
                            {`${numberFormat(creator.followersQtd)} followers`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
              {(items?.length > 0 ||
                collections?.length > 0 ||
                creators?.length > 0) && (
                <div className="button-container">
                  <button type="button" className="button-large button-outline">
                    <span>See all results</span>
                  </button>
                </div>
              )}
              {items?.length === 0 &&
                collections?.length === 0 &&
                creators?.length === 0 && (
                  <div className="not-found">
                    <h2>Sorry, no matches were found.</h2>
                    <p>Try a new search or explore our marketplace.</p>
                    <button
                      type="button"
                      className="button-medium button-primary"
                      onClick={goToExplorePage}
                    >
                      <FaRocket className="fa fa-rocket" />
                      <span>Explore now</span>
                    </button>
                  </div>
                )}
            </div>
          </div>
        )}
      </Container>
    )
  }
)

export default SearchInput
