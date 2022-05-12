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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faRocket, faSearch } from '@fortawesome/free-solid-svg-icons'

import { Image } from '@/components/Image'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { ContentLoader } from './ContentLoader'
import { searchResults } from '../../__mocks__'
import { truncateAddress, numberFormat } from '../../utils'

import { Container } from './styles'

export interface SearchInputHandle {
  setInputFocus: () => void
  clearSearchInput: () => void
}

interface SearchInputProps {
  setSearchModalIsOpen: (value: boolean) => void
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
  verified: boolean
}

interface CreatorProps {
  id: string
  avatarUrl: string
  name: string
  followersQtd: number
  verified: boolean
}

export const SearchInput = forwardRef<SearchInputHandle, SearchInputProps>(
  ({ setSearchModalIsOpen, placeholder }, ref) => {
    const router = useRouter()
    const { register, watch, resetField, setFocus, handleSubmit } = useForm()
    const searchFormRef = useRef<HTMLFormElement>(null)
    const searchResultsRef = useRef<HTMLDivElement>(null)
    const searchValue = watch('searchValue')
    const [searchResultsIsOpen, setSearchResultsIsOpen] = useState(false)
    const [items, setItems] = useState<ItemsProps[]>([])
    const [collections, setCollections] = useState<CollectionProps[]>([])
    const [creators, setCreators] = useState<CreatorProps[]>([])
    const [loading, setLoading] = useState(true)

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
      setItems([])
      setCollections([])
      setCreators([])
      setLoading(true)
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if (
        searchResultsIsOpen &&
        searchResultsRef.current &&
        !searchResultsRef.current?.contains(target) &&
        !searchFormRef.current?.contains(target)
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

            setTimeout(() => {
              setItems(searchResults.items)
              setCollections(searchResults.collections)
              setCreators(searchResults.creators)
              setLoading(false)
            }, 500)
          }
        }, 500)

        return () => clearTimeout(timeout)
      } else {
        setItems([])
        setCollections([])
        setCreators([])
        setLoading(true)
      }
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
        setItems([])
        setCollections([])
        setCreators([])
      }
    }))

    return (
      <Container className="search-container">
        <form ref={searchFormRef} onSubmit={handleSubmit(onSubmit)}>
          <label>
            <FontAwesomeIcon icon={faSearch} className="fa fa-search" />
            <input
              {...register('searchValue')}
              type="text"
              placeholder={placeholder}
              onFocus={onSearchInputFocus}
            />
            {searchValue && (
              <button type="button" onClick={clearSearchInput}>
                <FontAwesomeIcon icon={faTimes} className="fa fa-times" />
              </button>
            )}
          </label>
        </form>
        {loading && searchValue && <ContentLoader />}
        {!loading && searchValue && searchResultsIsOpen && (
          <div ref={searchResultsRef} className="search-results-container">
            <div className="search-results">
              {items.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Items</span>
                  </div>
                  <div className="section-list">
                    {items.map((item: ItemsProps, index: number) => (
                      <div
                        key={item.id}
                        tabIndex={0}
                        role="button"
                        className="list-item"
                      >
                        <Image
                          width="40"
                          height="40"
                          src={item.avatarUrl}
                          alt="NFT item"
                          className="item-image"
                          borderRadius="6"
                        />
                        <div
                          className="info-container"
                          style={index === 2 ? { borderBottom: 'none' } : {}}
                        >
                          <span className="name">{item.name}</span>
                          <span className="description">{item.saleType}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {collections.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Collections</span>
                  </div>
                  <div className="section-list">
                    {collections.map(
                      (collection: CollectionProps, index: number) => (
                        <div
                          key={collection.id}
                          tabIndex={0}
                          role="button"
                          className="list-item"
                        >
                          <Avatar
                            src={collection.avatarUrl}
                            alt="Collection avatar"
                            size="xs"
                            verified={collection.verified}
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
                        </div>
                      )
                    )}
                  </div>
                </>
              )}
              {creators.length > 0 && (
                <>
                  <div className="section-title">
                    <span>Creators</span>
                  </div>
                  <div className="section-list">
                    {creators.map((creator: CreatorProps, index: number) => (
                      <div
                        key={creator.id}
                        tabIndex={0}
                        role="button"
                        className="list-item"
                      >
                        <Avatar
                          src={creator.avatarUrl}
                          alt="Creator avatar"
                          size="xs"
                          verified={creator.verified}
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
                      </div>
                    ))}
                  </div>
                </>
              )}
              {(items.length > 0 ||
                collections.length > 0 ||
                creators.length > 0) && (
                <div className="button-container">
                  <Button variant="secundary" size="md" outlined full>
                    See all results
                  </Button>
                </div>
              )}
              {!loading &&
                searchValue &&
                items.length === 0 &&
                collections.length === 0 &&
                creators.length === 0 && (
                  <div className="not-found">
                    <h2>Sorry, no matches were found.</h2>
                    <p>Try a new search or explore our marketplace.</p>
                    <Button
                      variant="primary"
                      size="md"
                      icon={faRocket}
                      onClick={goToExplorePage}
                    >
                      Explore now
                    </Button>
                  </div>
                )}
            </div>
          </div>
        )}
      </Container>
    )
  }
)
