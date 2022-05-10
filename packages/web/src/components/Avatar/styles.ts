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
        '.fa-check-circle': {
          position: 'absolute',
          color: 'var(--colors-primary)',
          background: 'var(--colors-white)',
          borderRadius: '100px',
          outline: '2px solid var(--colors-primary)',
          outlineOffset: '-1px'
        }
      },
      false: {
        '.fa-check-circle': {
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
        '.fa-check-circle': {
          fontSize: 'var(--fontSizes-xs)',
          right: '2px',
          bottom: '-1px'
        }
      }
    },
    {
      size: 'sm',
      verified: true,
      css: {
        '.fa-check-circle': {
          fontSize: 'var(--fontSizes-sm)',
          right: '2px',
          bottom: '-2px'
        }
      }
    },
    {
      size: 'md',
      verified: true,
      css: {
        '.fa-check-circle': {
          fontSize: 'var(--fontSizes-md)',
          right: '2px',
          bottom: '-2px'
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
