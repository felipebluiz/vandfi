import React, { useState, useRef, useEffect } from 'react'
import { IconButton } from '@/components/IconButton'
import { SearchInput, SearchInputHandle } from '@/components/SearchInput'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import { StyledModal, Container } from './styles'

type SearchModalProps = React.ComponentProps<typeof StyledModal> & {
  setSearchModalIsOpen: (value: boolean) => void
}

export const SearchModal: React.FC<SearchModalProps> = ({
  setSearchModalIsOpen
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const searchInputRef = useRef<SearchInputHandle>(null)

  const closeModal = () => {
    setModalIsOpen(false)
    setTimeout(() => setSearchModalIsOpen(false), 200)
  }

  useEffect(() => {
    searchInputRef.current?.setInputFocus()
    setModalIsOpen(true)
  }, [])

  return (
    <StyledModal opacity={modalIsOpen}>
      <Container>
        <IconButton
          icon={faAngleLeft}
          variant="secundary"
          size="md"
          className="back-button"
          onClick={closeModal}
        />
        <SearchInput
          ref={searchInputRef}
          setSearchModalIsOpen={setSearchModalIsOpen}
          placeholder="Items, collections or creators"
        />
      </Container>
    </StyledModal>
  )
}
