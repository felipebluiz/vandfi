/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'

import { Text } from '@/components/Text'

import { Container } from './styles'

interface ToastProps {
  type: string
  message: string
  close: () => void
}

export const Toast: React.FC<ToastProps> = ({ type, message, close }) => {
  const [opened, setOpened] = useState(false)

  const handleClose = () => {
    setOpened(false)
    setTimeout(() => close(), 1000)
  }

  useEffect(() => {
    setOpened(true)
    setTimeout(() => handleClose(), 5000)
  }, [])

  return (
    <Container opened={opened}>
      {type === 'success' && (
        <FontAwesomeIcon icon={faCheckCircle} className="fa" />
      )}
      {type === 'error' && (
        <FontAwesomeIcon icon={faTimesCircle} className="fa" />
      )}
      {type === 'warning' && (
        <FontAwesomeIcon icon={faExclamationCircle} className="fa" />
      )}
      <Text size="md" className="message">
        {message}
      </Text>
      <button type="button" onClick={handleClose} className="close-button">
        <FontAwesomeIcon icon={faTimes} className="fa" />
      </button>
    </Container>
  )
}
