import { styled } from '../../../stitches.config'

export const StyledLink = styled('a', {
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        color: 'var(--colors-primary)',

        '&:hover': {
          color: 'var(--colors-hover-primary)'
        }
      },
      secundary: {
        color: 'var(--colors-white)',

        '&:hover': {
          color: 'var(--colors-hover-white)'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'secundary'
  }
})
