import React, { useState } from 'react'

import { StyledTooltip } from './styles'

type TooltipProps = React.ComponentProps<typeof StyledTooltip> & {
  direction: string
  delay?: string
  children: React.ReactNode
  content: React.ReactNode
}

export const Tooltip: React.FC<TooltipProps> = ({
  delay,
  children,
  direction = 'top',
  content,
  ...props
}) => {
  let timeout: NodeJS.Timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    if (content) {
      timeout = setTimeout(() => {
        setActive(true)
      }, Number(delay) || 100)
    }
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <StyledTooltip
      direction={direction}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      {...props}
    >
      {children}
      {active && <div className="tooltip-tip">{content}</div>}
    </StyledTooltip>
  )
}
