import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import ContentLoader from 'react-content-loader'
import { v4 as uuid } from 'uuid'

import { theme } from '../../../../stitches.config'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { Spinner } from '@/components/Spinner'
import { currencyFormat, numberFormat, truncateAddress } from '@/global/utils'
import { Listing } from '@/global/types'
import { itemListings } from '../../../__mocks__'
import { Button } from '@/components/Button'

interface ListingsTabProps {
  tokenId: string
  collectionAddress: string
}

const Loading = () => {
  const textWidth = [75, 30, 80, 100]

  return (
    <div className="table-container" style={{ overflow: 'hidden' }}>
      <table>
        <thead>
          <tr>
            <th>
              <Text size="sm" weight="medium" className="label">
                User
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                Expiration Date
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                Quantity
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                USD Unit Price
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                Unit Price
              </Text>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map(() => (
            <tr key={uuid()}>
              <td style={{ paddingBottom: '9px' }}>
                <ContentLoader
                  speed={2}
                  style={{ width: '100%', height: '40px' }}
                  backgroundColor={theme.colors['background-tertiary'].value}
                  foregroundColor={theme.colors['background-quaternary'].value}
                >
                  <rect x="0" y="0" rx="40" ry="40" width="40" height="40" />
                  <rect x="50" y="5" rx="2" ry="2" width="120" height="13" />
                  <rect x="50" y="25" rx="2" ry="2" width="80" height="10" />
                </ContentLoader>
              </td>
              {[...Array(5)].map((_, i) => (
                <td key={uuid()}>
                  <ContentLoader
                    speed={2}
                    style={{ width: '100%', height: '13px' }}
                    backgroundColor={theme.colors['background-tertiary'].value}
                    foregroundColor={
                      theme.colors['background-quaternary'].value
                    }
                  >
                    <rect rx="2" ry="2" width={textWidth[i]} height="13" />
                  </ContentLoader>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const ListingsTab: React.FC<ListingsTabProps> = ({ tokenId }) => {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasEndingListings, setHasEndingListings] = useState(false)
  const loaderRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(entities => {
      const target = entities[0]

      if (target?.isIntersecting) {
        setCurrentPage(old => old + 1)
      }
    }, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }
  }, [loading])

  useEffect(() => {
    const handleResquest = () => {
      const data = itemListings.filter(listing => listing.tokenId === tokenId)

      if (!data.length) {
        setHasEndingListings(true)
        setLoading(false)
        return
      }

      setListings([...listings, ...data])
      setLoading(false)
    }

    if (!hasEndingListings) setTimeout(() => handleResquest(), 1000)
  }, [currentPage])

  return (
    <>
      {loading && <Loading />}
      {!loading && !listings.length && <span>Not found</span>}
      {!loading && !!listings.length && (
        <div
          className={
            listings.length > 5
              ? 'table-container table-padding'
              : 'table-container'
          }
        >
          <table>
            <thead>
              <tr>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    User
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    Expiration Date
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    Quantity
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    USD Unit Price
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    Unit Price
                  </Text>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {listings.map(listing => (
                <tr key={uuid()}>
                  <td>
                    <div className="user">
                      <Avatar
                        src={listing.user.avatarUrl}
                        size="xs"
                        className="avatar-image"
                        verified={listing.user.verified}
                      />
                      <div>
                        <Text weight="medium" size="sm" className="name">
                          <Link href="#">
                            {listing.user?.name ||
                              truncateAddress(listing.user.address)}
                          </Link>
                        </Text>
                        <Text size="xs" className="date">
                          {moment(listing.date).fromNow()}
                        </Text>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Text size="sm">
                      {`In ${moment(listing.expirationDate).fromNow(true)}`}
                    </Text>
                  </td>
                  <td>
                    <Text size="sm">{numberFormat(listing.quantity)}</Text>
                  </td>
                  <td>
                    <Text size="sm">
                      {currencyFormat(listing.price.convertedAmount)}
                    </Text>
                  </td>
                  <td>
                    <div className="price">
                      <FontAwesomeIcon
                        icon={faEthereum as IconProp}
                        className="fa"
                      />
                      <Text size="md">
                        <span className="amount">{listing.price.amount}</span>
                        <span>{listing.price.currencySymbol}</span>
                      </Text>
                    </div>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      size="md"
                      icon={faEthereum as IconProp}
                      className="buy-button"
                    >
                      Buy now
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            {!hasEndingListings && listings.length > 5 && (
              <tfoot>
                <tr>
                  <td colSpan={6}>
                    <Spinner />
                    <div ref={loaderRef} />
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )}
    </>
  )
}
