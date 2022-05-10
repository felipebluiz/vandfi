import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Spinner } from '@/components/Spinner'

import { StyledButton } from './styles'

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  children: React.ReactNode
  variant: string
  size: string
  outlined?: boolean
  radius?: string
  disabled?: boolean
  full?: boolean
  loading?: boolean
  icon?: IconProp
}

export const Button: React.FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <StyledButton {...props}>
      {icon && <FontAwesomeIcon icon={icon} className="fa" />}
      <span>{children}</span>
      <Spinner className="spinner" />
    </StyledButton>
  )
}
