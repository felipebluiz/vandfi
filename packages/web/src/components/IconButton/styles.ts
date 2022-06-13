import { styled } from '../../../stitches.config'

export const StyledIconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.fa': {
    fontSize: 'var(--fontSizes-md)'
  },

  '.spinner': {
    display: 'none'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: 'var(--colors-primary)',
        border: 'none',
        color: 'var(--colors-white)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-primary)'
        }
      },
      secundary: {
        backgroundColor: 'var(--colors-background-tertiary)',
        border: 'none',
        color: 'var(--colors-regular)',

        '&:hover': {
          backgroundColor: 'var(--colors-hover-background-tertiary)'
        }
      }
    },
    size: {
      sm: {
        width: '36px',
        height: '36px',

        '.fa-times': {
          fontSize: 'var(--fontSizes-md)'
        }
      },
      md: {
        width: '44px',
        height: '44px',

        '.fa-times': {
          fontSize: 'var(--fontSizes-lg)'
        }
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
