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
import { Bid } from '@/global/types'
import { itemBids } from '../../../__mocks__'

interface BidsTabProps {
  tokenId: string
  collectionAddress: string
  multipleOwners: boolean
}

const Loading = ({ multipleOwners = false }) => {
  const textWidth = multipleOwners ? [75, 110, 30, 80, 100] : [75, 110, 80, 100]

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
                Collection Floor Difference
              </Text>
            </th>
            {multipleOwners && (
              <th>
                <Text size="sm" weight="medium" className="label">
                  Quantity
                </Text>
              </th>
            )}
            <th>
              <Text size="sm" weight="medium" className="label">
                {multipleOwners ? 'USD Unit Price' : 'USD Price'}
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                {multipleOwners ? 'Unit Price' : 'Price'}
              </Text>
            </th>
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
              {[...Array(multipleOwners ? 5 : 4)].map((_, i) => (
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

export const BidsTab: React.FC<BidsTabProps> = ({
  tokenId,
  multipleOwners
}) => {
  const [bids, setBids] = useState<Bid[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasEndingBids, setHasEndingBids] = useState(false)
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
      const data = itemBids.filter(bid => bid.tokenId === tokenId)

      if (!data.length) {
        setHasEndingBids(true)
        setLoading(false)
        return
      }

      setBids([...bids, ...data])
      setLoading(false)
    }

    if (!hasEndingBids) setTimeout(() => handleResquest(), 1000)
  }, [currentPage])

  return (
    <>
      {loading && <Loading multipleOwners={multipleOwners} />}
      {!loading && !bids.length && <span>Not found</span>}
      {!loading && !!bids.length && (
        <div
          className={
            bids.length > 5
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
                    Collection Floor Difference
                  </Text>
                </th>
                {multipleOwners && (
                  <th>
                    <Text size="sm" weight="medium" className="label">
                      Quantity
                    </Text>
                  </th>
                )}
                <th>
                  <Text size="sm" weight="medium" className="label">
                    {multipleOwners ? 'USD Unit Price' : 'USD Price'}
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    {multipleOwners ? 'Unit Price' : 'Price'}
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {bids.map(bid => (
                <tr key={uuid()}>
                  <td>
                    <div className="user">
                      <Avatar
                        src={bid.user.avatarUrl}
                        size="xs"
                        className="avatar-image"
                        verified={bid.user.verified}
                      />
                      <div>
                        <Text weight="medium" size="sm" className="name">
                          <Link href="#">
                            {bid.user?.name ||
                              truncateAddress(bid.user.address)}
                          </Link>
                        </Text>
                        <Text size="xs" className="date">
                          {moment(bid.date).fromNow()}
                        </Text>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Text size="sm">
                      {`In ${moment(bid.expirationDate).fromNow(true)}`}
                    </Text>
                  </td>
                  <td>
                    <Text size="sm">
                      {`${bid.collectionFloorDifference.percent}% ${
                        bid.collectionFloorDifference.bellow
                          ? 'bellow floor'
                          : 'above floor'
                      }`}
                    </Text>
                  </td>
                  {multipleOwners && (
                    <td>
                      <Text size="sm">
                        {numberFormat(bid.quantity, 'standard')}
                      </Text>
                    </td>
                  )}
                  <td>
                    <Text size="sm">
                      {currencyFormat(bid.price.convertedAmount)}
                    </Text>
                  </td>
                  <td>
                    <div className="price">
                      <FontAwesomeIcon
                        icon={faEthereum as IconProp}
                        className="fa"
                      />
                      <Text size="md">
                        <span className="amount">{bid.price.amount}</span>
                        <span>{bid.price.currencySymbol}</span>
                      </Text>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {!hasEndingBids && bids.length > 5 && (
              <tfoot>
                <tr>
                  <td colSpan={multipleOwners ? 6 : 5}>
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
