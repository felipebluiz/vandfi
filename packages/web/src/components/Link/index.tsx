import React from 'react'
import Link from 'next/link'

import { StyledLink } from './styles'

type LinkProps = React.ComponentProps<typeof StyledLink> & {
  href: string
  children: React.ReactNode
}

const LinkComponent: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <StyledLink {...props}>{children}</StyledLink>
    </Link>
  )
}

export { LinkComponent as Link }
