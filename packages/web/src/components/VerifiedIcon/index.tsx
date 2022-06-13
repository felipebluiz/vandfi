import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StyledVerifiedIcon } from './styles'

type VerifiedIconProps = React.ComponentProps<typeof StyledVerifiedIcon> & {
  size: string
}

export const VerifiedIcon: React.FC<VerifiedIconProps> = props => {
  return (
    <StyledVerifiedIcon {...props}>
      <FontAwesomeIcon icon={faCheck} className="fa" />
    </StyledVerifiedIcon>
  )
}
