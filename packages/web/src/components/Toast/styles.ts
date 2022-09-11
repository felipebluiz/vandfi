import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'relative',
  right: '-1000px',
  width: 'fit-content',
  minWidth: '320px',
  maxWidth: '480px',
  minHeight: '60px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '15px 14px 15px 20px',
  marginTop: '16px',
  backgroundColor: 'var(--colors-background-tertiary)',
  borderRadius: '10px',
  boxShadow: 'rgb(4 17 29 / 25%) 0px 4px 20px',
  transition: 'right 0.1s ease-in-out',

  '.fa': {
    fontSize: '18px',
    marginBottom: '2px',

    '&.fa-check-circle': {
      color: 'var(--colors-sucess-primary)'
    },

    '&.fa-times-circle': {
      color: 'var(--colors-error-primary)'
    },

    '&.fa-exclamation-circle': {
      color: 'var(--colors-warning-primary)'
    }
  },

  '.message': {
    flex: 1,
    color: 'var(--colors-white)',
    lineHeight: 'var(--lineHeights-short)'
  },

  '.close-button': {
    padding: '3px 6px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    '.fa': {
      marginBottom: '-1px',
      color: 'var(--colors-regular)'
    },

    '&:hover .fa': {
      color: 'var(--colors-white)'
    }
  },

  variants: {
    opened: {
      true: {
        right: '0'
      }
    }
  }
})
