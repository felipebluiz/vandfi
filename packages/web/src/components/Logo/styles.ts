import { keyframes } from '@stitches/react'
import { styled } from '../../../stitches.config'

export const LogoAnimation = keyframes({
  '0%': { transform: 'scale(1, 1)' },
  '50%': { transform: 'scale(1.1, 1.1)' },
  '100%': { transform: 'scale(1, 1)' }
})

export const Container = styled('div', {
  a: {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',

    '.logo': {
      width: '35px',
      height: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--colors-primary)',
      borderRadius: '5px',
      fontSize: '52px',
      fontWeight: 'var(--fontWeights-bold)',
      color: 'var(--colors-white)',
      marginRight: '10px',
      overflow: 'hidden'
    },

    h1: {
      fontSize: '28px',
      color: 'var(--colors-white)'
    }
  }
})
