import React, { useRef, useState, useEffect } from 'react'
import { Modal, ModalHandle } from '@/components/Modal'

import { Container } from './styles'
import { Avatar } from '@/components/Avatar'
import { Spinner } from '@/components/Spinner'
import { ContentLoader } from './ContentLoader'
import { creators as creatorsMock } from '../../__mocks__'
import { numberFormat } from '@/global/utils'

interface ItemOwnersModalProps {
  itemOwnersModalIsOpen: boolean
  setItemOwnersModalIsOpen: (value: boolean) => void
}

interface CreatorProps {
  id: string
  avatarUrl: string
  name: string
  followersQtd: number
  verified: boolean
}

export const ItemOwnersModal: React.FC<ItemOwnersModalProps> = ({
  itemOwnersModalIsOpen,
  setItemOwnersModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)
  const [creators, setCreators] = useState<CreatorProps[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [hasEndingCreators, setHasEndingCreators] = useState(false)
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
    const handleResquest = async () => {
      const data = creatorsMock

      if (!data.length) {
        setHasEndingCreators(true)
        setLoading(false)
        return
      }

      setCreators([...creators, ...data])
      setLoading(false)
    }

    if (!hasEndingCreators) setTimeout(() => handleResquest(), 1000)
  }, [currentPage])

  return (
    <Modal
      ref={modalRef}
      modalIsOpen={itemOwnersModalIsOpen}
      setModalIsOpen={setItemOwnersModalIsOpen}
      hideActions
      width="420"
      title="Owners"
    >
      <Container>
        {loading && <ContentLoader />}
        {!loading && (
          <>
            {creators.map((creator, index: number) => (
              <div
                key={index.toString()}
                tabIndex={0}
                role="button"
                className="list-item"
              >
                <Avatar
                  src={creator.avatarUrl}
                  alt="Creator avatar"
                  size="xs"
                  verified={creator.verified}
                  className="avatar"
                />
                <div
                  className="info-container"
                  style={
                    index === creators.length - 1
                      ? { borderBottomColor: 'transparent' }
                      : {}
                  }
                >
                  <span className="name">{creator.name}</span>
                  <span className="description">
                    {`${numberFormat(creator.followersQtd)} followers`}
                  </span>
                </div>
              </div>
            ))}
            {!hasEndingCreators && (
              <div className="loading-container">
                <Spinner />
              </div>
            )}
            <div ref={loaderRef} />
          </>
        )}
      </Container>
    </Modal>
  )
}
