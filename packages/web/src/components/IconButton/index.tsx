import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Spinner } from '@/components/Spinner'

import { StyledIconButton } from './styles'

type IconButtonProps = React.ComponentProps<typeof StyledIconButton> & {
  icon: IconProp
  variant: string
  size: string
  outlined?: boolean
  radius?: string
  disabled?: boolean
  loading?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  return (
    <StyledIconButton {...props}>
      <FontAwesomeIcon icon={icon} className="fa" />
      <Spinner className="spinner" />
    </StyledIconButton>
  )
}
