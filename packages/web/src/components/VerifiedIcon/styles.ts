import { styled } from '../../../stitches.config'

export const StyledVerifiedIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--colors-primary)',
  borderRadius: '100px',

  '.fa-check': {
    color: 'var(--colors-white)'
  },

  variants: {
    size: {
      xxs: {
        minWidth: '12px',
        height: '12px',

        '.fa-check': {
          width: '6px !important',
          fontSize: '7px',
          marginTop: '1px'
        }
      },
      xs: {
        minWidth: '14px',
        height: '14px',

        '.fa-check': {
          width: '8px !important',
          fontSize: '9px',
          marginTop: '1px'
        }
      },
      sm: {
        minWidth: '14px',
        height: '14px',

        '.fa-check': {
          width: '8px !important',
          fontSize: '9px',
          marginTop: '1px'
        }
      },
      md: {
        minWidth: '16px',
        height: '16px',

        '.fa-check': {
          width: '10px !important',
          fontSize: '10px',
          marginTop: '2px'
        }
      }
    }
  }
})
