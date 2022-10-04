import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import ContentLoader from 'react-content-loader'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import { theme } from '../../../../stitches.config'
import { Avatar } from '@/components/Avatar'
import { Link } from '@/components/Link'
import { Text } from '@/components/Text'
import { Spinner } from '@/components/Spinner'
import { Tooltip } from '@/components/Tooltip'
import { currencyFormat, numberFormat, truncateAddress } from '@/global/utils'
import { History } from '@/global/types'
import { itemHistory } from '../../../__mocks__'
import {
  faExchangeAlt,
  faExternalLinkAlt,
  faFire,
  faShoppingCart,
  faTag,
  faThList
} from '@fortawesome/free-solid-svg-icons'

interface HistoryTabProps {
  tokenId: string
  collectionAddress: string
  multipleOwners: boolean
}

const Loading = ({ multipleOwners = false }) => {
  const textWidth = multipleOwners ? [30, 70, 90] : [70, 90]

  return (
    <div className="table-container" style={{ overflow: 'hidden' }}>
      <table>
        <thead>
          <tr>
            <th>
              <Text size="sm" weight="medium" className="label">
                Event
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                Date
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                From
              </Text>
            </th>
            <th>
              <Text size="sm" weight="medium" className="label">
                To
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
                {multipleOwners ? 'USD Unit Price' : 'USD Unit Price'}
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
              {[...Array(2)].map(() => (
                <td key={uuid()}>
                  <ContentLoader
                    speed={2}
                    style={{ width: '100%', height: '13px' }}
                    backgroundColor={theme.colors['background-tertiary'].value}
                    foregroundColor={
                      theme.colors['background-quaternary'].value
                    }
                  >
                    <rect rx="2" ry="2" width="90" height="13" />
                  </ContentLoader>
                </td>
              ))}
              {[...Array(2)].map(() => (
                <td key={uuid()} style={{ paddingBottom: '9px' }}>
                  <ContentLoader
                    speed={2}
                    style={{ width: '100%', height: '40px' }}
                    backgroundColor={theme.colors['background-tertiary'].value}
                    foregroundColor={
                      theme.colors['background-quaternary'].value
                    }
                  >
                    <rect x="0" y="0" rx="40" ry="40" width="40" height="40" />
                    <rect
                      x="50"
                      y="12.5"
                      rx="2"
                      ry="2"
                      width="120"
                      height="13"
                    />
                  </ContentLoader>
                </td>
              ))}
              {[...Array(multipleOwners ? 3 : 2)].map((_, i) => (
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

export const HistoryTab: React.FC<HistoryTabProps> = ({
  tokenId,
  multipleOwners
}) => {
  const [histories, setHistories] = useState<History[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasEndingHistories, setHasEndingHistories] = useState(false)
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
      const data = itemHistory.filter(history => history.tokenId === tokenId)

      if (!data.length) {
        setHasEndingHistories(true)
        setLoading(false)
        return
      }

      setHistories([...histories, ...data])
      setLoading(false)
    }

    if (!hasEndingHistories) setTimeout(() => handleResquest(), 1000)
  }, [currentPage])

  return (
    <>
      {loading && <Loading multipleOwners={multipleOwners} />}
      {!loading && !histories.length && <span>Not found</span>}
      {!loading && !!histories.length && (
        <div
          className={
            histories.length > 5
              ? 'table-container table-padding'
              : 'table-container'
          }
        >
          <table>
            <thead>
              <tr>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    Event
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    Date
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    From
                  </Text>
                </th>
                <th>
                  <Text size="sm" weight="medium" className="label">
                    To
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
              {histories.map(history => (
                <tr key={uuid()}>
                  <td>
                    <div className={`event ${history.event}`}>
                      {history.event === 'sale' && (
                        <FontAwesomeIcon icon={faShoppingCart} className="fa" />
                      )}
                      {history.event === 'transfer' && (
                        <FontAwesomeIcon icon={faExchangeAlt} className="fa" />
                      )}
                      {history.event === 'bid' && (
                        <FontAwesomeIcon icon={faTag} className="fa" />
                      )}
                      {history.event === 'list' && (
                        <FontAwesomeIcon icon={faThList} className="fa" />
                      )}
                      {history.event === 'mint' && (
                        <FontAwesomeIcon icon={faFire} className="fa" />
                      )}
                      <Text size="xs">{history.event}</Text>
                    </div>
                  </td>
                  <td>
                    {history.event !== 'bid' && history.event !== 'list' ? (
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="date"
                      >
                        <Text size="sm">{moment(history.date).fromNow()}</Text>
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="fa"
                        />
                      </a>
                    ) : (
                      <Text size="sm">{moment(history.date).fromNow()}</Text>
                    )}
                  </td>
                  {history.event !== 'mint' ? (
                    <td style={{ overflow: 'hidden' }}>
                      <div className="user">
                        <Avatar
                          src={history.sourceUser?.avatarUrl || ''}
                          size="xs"
                          className="avatar-image"
                          verified={history.sourceUser?.verified}
                        />
                        <div>
                          <Text weight="medium" size="sm" className="name">
                            <Link href="#">
                              {history.sourceUser?.name ||
                                truncateAddress(history.sourceUser?.address)}
                            </Link>
                          </Text>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td />
                  )}
                  {history.event !== 'list' && history.event !== 'bid' ? (
                    <td style={{ overflow: 'hidden' }}>
                      <div className="user">
                        <Avatar
                          src={history.targetUser?.avatarUrl || ''}
                          size="xs"
                          className="avatar-image"
                          verified={history.targetUser?.verified}
                        />
                        <div>
                          <Text weight="medium" size="sm" className="name">
                            <Link href="#">
                              {history.targetUser?.name ||
                                truncateAddress(history.targetUser?.address)}
                            </Link>
                          </Text>
                        </div>
                      </div>
                    </td>
                  ) : (
                    <td />
                  )}
                  {multipleOwners && (
                    <td>
                      <Text size="sm">
                        {numberFormat(history.quantity, 'standard')}
                      </Text>
                    </td>
                  )}
                  {history.event !== 'mint' && history.event !== 'transfer' ? (
                    <>
                      <td>
                        <Tooltip
                          direction="top"
                          content={
                            history.expired
                              ? `${history.event === 'bid' ? 'Bid' : ''}${
                                  history.event === 'list' ? 'List' : ''
                                } expired or canceled`
                              : ''
                          }
                        >
                          <Text
                            size="sm"
                            className={history.expired ? 'expired' : ''}
                          >
                            {currencyFormat(history.price?.convertedAmount)}
                          </Text>
                        </Tooltip>
                      </td>
                      <td>
                        <Tooltip
                          direction="top"
                          content={
                            history.expired
                              ? `${history.event === 'bid' ? 'Bid' : ''}${
                                  history.event === 'list' ? 'List' : ''
                                } expired or canceled`
                              : ''
                          }
                        >
                          <div className="price">
                            <FontAwesomeIcon
                              icon={faEthereum as IconProp}
                              className="fa"
                            />
                            <Text
                              size="md"
                              className={history.expired ? 'expired' : ''}
                            >
                              <span className="amount">
                                {history.price?.amount}
                              </span>
                              <span>{history.price?.currencySymbol}</span>
                            </Text>
                          </div>
                        </Tooltip>
                      </td>
                    </>
                  ) : (
                    <>
                      <td />
                      <td />
                    </>
                  )}
                </tr>
              ))}
            </tbody>
            {!hasEndingHistories && histories.length > 5 && (
              <tfoot>
                <tr>
                  <td colSpan={multipleOwners ? 7 : 6}>
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
