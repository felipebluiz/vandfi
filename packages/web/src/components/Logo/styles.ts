import { keyframes } from '@stitches/react'
import { styled } from '../../../stitches.config'

export const LogoAnimation = keyframes({
  '0%': { transform: 'scale(1, 1)' },
  '50%': { transform: 'scale(1.1, 1.1)' },
  '100%': { transform: 'scale(1, 1)' }
})

export const StyledLogo = styled('div', {
  width: 'fit-content',

  a: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',

    '.logo': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--colors-primary)',
      borderRadius: '5px',
      fontWeight: 'var(--fontWeights-bold)',
      color: 'var(--colors-white)',
      marginRight: '10px',
      overflow: 'hidden'
    },

    h1: {
      fontSize: '28px',
      color: 'var(--colors-white)'
    }
  },

  variants: {
    size: {
      sm: {
        a: {
          '.logo': {
            width: '28px',
            height: '28px',
            fontSize: '42px'
          },
          h1: {
            fontSize: '24px'
          }
        }
      },
      md: {
        a: {
          '.logo': {
            width: '35px',
            height: '35px',
            fontSize: '52px'
          },
          h1: {
            fontSize: '28px'
          }
        }
      }
    },
    animation: {
      true: {
        '@bp990': {
          '&:hover': {
            animation: `${LogoAnimation} 1s infinite`
          }
        }
      }
    }
  },

  defaultVariants: {
    size: 'md',
    animation: true
  }
})
