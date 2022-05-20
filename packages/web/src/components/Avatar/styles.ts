import { styled } from '../../../stitches.config'

export const StyledAvatar = styled('button', {
  padding: '0',
  background: 'none',
  border: 'none',

  img: {
    verticalAlign: 'bottom',
    width: '100%',
    height: '100%'
  },

  variants: {
    size: {
      xs: {
        minWidth: '40px',
        width: '40px',
        height: '40px'
      },
      sm: {
        minWidth: '44px',
        width: '44px',
        height: '44px'
      },
      md: {
        minWidth: '52px',
        width: '52px',
        height: '52px'
      }
    },
    radius: {
      rounded: {
        borderRadius: '100px',

        img: {
          borderRadius: '100px'
        }
      },
      semiRounded: {
        borderRadius: '8px',

        img: {
          borderRadius: '8px'
        }
      }
    },
    clickable: {
      true: {
        cursor: 'pointer',

        '&:hover': {
          opacity: 'var(--opacity-semiOpaque)'
        }
      },
      false: {
        cursor: 'default'
      }
    },
    verified: {
      true: {
        position: 'relative',

        '.check-circle': {
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--colors-primary)',
          borderRadius: '100px',

          '.fa-check': {
            color: 'var(--colors-white)'
          }
        }
      },
      false: {
        '.check-circle': {
          display: 'none'
        }
      }
    }
  },

  compoundVariants: [
    {
      size: 'xs',
      verified: true,
      css: {
        '.check-circle': {
          width: '14px',
          height: '14px',
          right: '1px',
          bottom: '-2px',

          '.fa-check': {
            width: '8px',
            fontSize: '9px',
            marginTop: '1px'
          }
        }
      }
    },
    {
      size: 'sm',
      verified: true,
      css: {
        '.check-circle': {
          width: '14px',
          height: '14px',
          right: '2px',
          bottom: '-2px',

          '.fa-check': {
            width: '8px',
            fontSize: '9px',
            marginTop: '1px'
          }
        }
      }
    },
    {
      size: 'md',
      verified: true,
      css: {
        '.check-circle': {
          width: '16px',
          height: '16px',
          right: '2px',
          bottom: '-2px',

          '.fa-check': {
            width: '10px',
            fontSize: '10px',
            marginTop: '2px'
          }
        }
      }
    }
  ],

  defaultVariants: {
    size: 'sm',
    radius: 'rounded',
    clickable: true,
    verified: false
  }
})
