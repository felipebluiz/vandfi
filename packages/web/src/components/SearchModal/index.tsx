import React, { useRef, useEffect } from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { Modal, ModalHandle } from '@/components/Modal'
import { IconButton } from '@/components/IconButton'
import { SearchInput, SearchInputHandle } from '@/components/SearchInput'

import { Container } from './styles'

interface SearchModalProps {
  searchModalIsOpen: boolean
  setSearchModalIsOpen: (value: boolean) => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
  searchModalIsOpen,
  setSearchModalIsOpen
}) => {
  const modalRef = useRef<ModalHandle>(null)
  const searchInputRef = useRef<SearchInputHandle>(null)

  useEffect(() => {
    searchInputRef.current?.setInputFocus()
  }, [])

  return (
    <Modal
      ref={modalRef}
      hideHeader
      hideActions
      modalIsOpen={searchModalIsOpen}
      setModalIsOpen={setSearchModalIsOpen}
    >
      <Container>
        <IconButton
          icon={faAngleLeft}
          variant="secundary"
          size="md"
          className="back-button"
          onClick={() => modalRef.current?.closeModal()}
        />
        <SearchInput
          ref={searchInputRef}
          setSearchModalIsOpen={setSearchModalIsOpen}
          placeholder="Items, collections or creators"
        />
      </Container>
    </Modal>
  )
}
