import { styled } from '../../../stitches.config'

export const StyledButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '30px',
  cursor: 'pointer',
  position: 'relative',
  border: 'none',

  '.fa': {
    fontSize: 'var(--fontSizes-md)',
    marginRight: '10px',

    '&.fa-tag': {
      fontSize: 'var(--fontSizes-sm)',
      marginBottom: '-2px'
    }
  },

  span: {
    fontFamily: 'var(--fonts-default)',
    fontSize: 'var(--fontSizes-sm)',
    fontWeight: 'var(--fontWeights-medium)',
    letterSpacing: '0.3px'
  },

  '.spinner': {
    display: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--colors-primary)',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-primary)'
        }
      },
      secundary: {
        backgroundColor: 'var(--colors-background-quaternary)',
        color: 'var(--colors-regular)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-background-quaternary)'
        }
      },
      tertiary: {
        backgroundColor: 'var(--colors-background-tertiary)',
        color: 'var(--colors-regular)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-background-tertiary)'
        }
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
        backgroundColor: 'transparent !important'
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

        '.fa, span, img': {
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
        boxShadow: 'inset 0 0 0px 2px var(--colors-primary)',

        '&:hover': {
          boxShadow: 'inset 0 0 0px 2px var(--colors-hover-primary)'
        }
      }
    },
    {
      variant: 'secundary',
      outlined: true,
      css: {
        color: 'var(--colors-regular)',
        boxShadow: 'inset 0 0 0px 2px var(--colors-background-quaternary)',

        '&:hover': {
          boxShadow:
            'inset 0 0 0px 2px var(--colors-hover-background-quaternary)'
        }
      }
    },
    {
      variant: 'tertiary',
      outlined: true,
      css: {
        color: 'var(--colors-regular)',
        boxShadow: 'inset 0 0 0px 2px var(--colors-background-tertiary)',

        '&:hover': {
          boxShadow: 'inset 0 0 0px 2px var(--colors-hover-background-tertiary)'
        }
      }
    }
  ],

  defaultVariants: {
    radius: 'rounded'
  }
})
