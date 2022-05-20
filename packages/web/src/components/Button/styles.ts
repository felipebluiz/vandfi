import { styled } from '../../../stitches.config'

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '30px',
  cursor: 'pointer',
  position: 'relative',

  '.fa': {
    fontSize: 'var(--fontSizes-md)',
    marginRight: '10px'
  },

  span: {
    fontFamily: 'var(--fonts-default)',
    fontSize: 'var(--fontSizes-sm)',
    fontWeight: 'var(--fontWeights-medium)',
    letterSpacing: '0.3px'
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
        backgroundColor: 'var(--colors-background-quaternary)',
        border: 'none',
        color: 'var(--colors-regular)'
      },
      tertiary: {
        backgroundColor: 'var(--colors-background-tertiary)',
        border: 'none',
        color: 'var(--colors-regular)'
      }
    },
    size: {
      md: {
        padding: '12px 22px'
      },
      lg: {
        padding: '14px 26px'
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
    full: {
      true: {
        width: '100%'
      }
    },
    loading: {
      true: {
        '.spinner': {
          display: 'initial',
          position: 'absolute'
        },
        '.fa, span': {
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
        borderColor: 'var(--colors-background-quaternary)'
      }
    }
  ],

  defaultVariants: {
    radius: 'rounded'
  }
})
