import React, { useState, useRef, useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import SearchInput, { SearchInputHandle } from '@/components/SearchInput'

import { Modal, Container } from './styles'

interface SearchModalProps {
  setSearchModalIsOpen: (value: boolean) => void
}

const SearchModal: React.FC<SearchModalProps> = ({ setSearchModalIsOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const searchInputRef = useRef<SearchInputHandle>(null)

  const closeModal = () => {
    setModalIsOpen(false)
    setTimeout(() => setSearchModalIsOpen(false), 200)
  }

  useEffect(() => {
    searchInputRef.current.setInputFocus()
    setModalIsOpen(true)
  }, [])

  return (
    <Modal css={{ opacity: `${modalIsOpen ? '1' : '0'}` }}>
      <Container>
        <button
          type="button"
          className="mobile-button back-button"
          onClick={closeModal}
        >
          <FaAngleLeft className="fa fa-angle-left" />
        </button>
        <SearchInput
          ref={searchInputRef}
          setSearchModalIsOpen={setSearchModalIsOpen}
          placeholder="Items, collections or creators"
        />
      </Container>
    </Modal>
  )
}

export { SearchModal }
