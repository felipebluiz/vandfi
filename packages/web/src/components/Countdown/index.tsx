import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import ContentLoader from 'react-content-loader'
import { theme } from '../../../stitches.config'

import { useCountdown } from '@/hooks/useCountdown'
import { countDownFormat } from 'src/utils'

import { StyledCountDown } from './styles'

type CountDownProps = React.ComponentProps<typeof StyledCountDown> & {
  date: string
}

export const CountDown: React.FC<CountDownProps> = ({ date, ...props }) => {
  const [placeholder, setPlaceholder] = useState(true)
  const timeLeft = useCountdown(date)
  const noDaysLeft = !(timeLeft && timeLeft[0])

  setTimeout(() => {
    setPlaceholder(false)
  }, 1000)

  return (
    <StyledCountDown {...props}>
      {placeholder ? (
        <ContentLoader
          speed={2}
          backgroundColor={theme.colors['background-tertiary'].value}
          foregroundColor={theme.colors['background-quaternary'].value}
          style={{
            width: noDaysLeft ? '130px' : '152px',
            height: '27px',
            verticalAlign: 'top'
          }}
        >
          <rect
            x="0"
            y="0"
            rx="10"
            ry="10"
            width={noDaysLeft ? '130px' : '152px'}
            height="27"
          />
        </ContentLoader>
      ) : (
        <div>
          <FontAwesomeIcon icon={faClock} className="fa" />
          <span className="counter">{countDownFormat(timeLeft)}</span>
          <span>left</span>
        </div>
      )}
    </StyledCountDown>
  )
}
