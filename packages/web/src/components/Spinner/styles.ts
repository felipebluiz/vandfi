import { keyframes } from '@stitches/react'
import { styled } from '../../../stitches.config'

const animation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

export const StyledSpinner = styled('div', {
  position: 'relative',
  width: '10em',
  height: '10em',
  margin: 'auto',
  borderTop: '1.3em solid',
  borderRight: '1.3em solid',
  borderBottom: '1.3em solid',
  borderLeft: '1.3em solid',
  borderRadius: '50%',
  transform: 'translateZ(0)',
  animation: `${animation} 0.5s infinite linear`,

  '&:after': {
    borderRadius: '50%',
    width: '10em',
    height: '10em'
  },

  variants: {
    size: {
      sm: { fontSize: '0.1rem' },
      md: { fontSize: '0.12rem' },
      lg: { fontSize: '0.15rem' },
      xl: { fontSize: '0.18rem' }
    },
    color: {
      white: {
        borderTopColor: 'rgba(255, 255, 255, 0.2)',
        borderRightColor: 'rgba(255, 255, 255, 0.2)',
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
        borderLeftColor: 'var(--colors-white)'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'white'
  }
})
