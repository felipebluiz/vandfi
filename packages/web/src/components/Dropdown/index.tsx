import React, { useEffect, useState } from 'react'

import { Container } from './styles'

interface DropdownProps {
  children: React.ReactNode
  showDropdown: boolean
  setShowDropdown: (value: boolean) => void
}

export const Dropdown: React.FC<DropdownProps> = ({
  showDropdown,
  setShowDropdown,
  children
}) => {
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const handleClick = () => {
      setOpened(false)
      setTimeout(() => setShowDropdown(false), 200)
    }

    if (showDropdown) {
      setOpened(true)

      document.addEventListener('mousedown', handleClick)

      return () => document.removeEventListener('mousedown', handleClick)
    }
  }, [showDropdown, setShowDropdown])

  return <Container opened={opened}>{children}</Container>
}
