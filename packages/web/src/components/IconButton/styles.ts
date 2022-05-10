import { styled } from '../../../stitches.config'

export const StyledIconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.fa': {
    fontSize: 'var(--fontSizes-md)'
  },

  '&:hover': {
    opacity: 'var(--opacity-semiOpaque)'
  },

  '.spinner': {
    display: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--colors-primary)',
        border: 'none',
        color: 'var(--colors-white)'
      },
      secundary: {
        backgroundColor: 'var(--colors-background-tertiary)',
        border: 'none',
        color: 'var(--colors-regular)'
      }
    },
    size: {
      md: {
        width: '44px',
        height: '44px'
      }
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: '2px solid'
      }
    },
    radius: {
      rounded: {
        borderRadius: '100px'
      },
      semiRounded: {
        borderRadius: '8px'
      }
    },
    disabled: {
      true: {
        opacity: 'var(--opacity-intense)',
        cursor: 'not-allowed',
        '&:hover': {
          opacity: 'var(--opacity-intense)'
        }
      }
    },
    loading: {
      true: {
        '.spinner': {
          display: 'initial',
          position: 'absolute'
        },
        '.fa': {
          visibility: 'hidden'
        }
      }
    }
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        color: 'var(--colors-white)',
        borderColor: 'var(--colors-primary)'
      }
    },
    {
      variant: 'secundary',
      outlined: true,
      css: {
        color: 'var(--colors-regular)',
        borderColor: 'var(--colors-background-tertiary)'
      }
    }
  ],

  defaultVariants: {
    radius: 'rounded'
  }
})
