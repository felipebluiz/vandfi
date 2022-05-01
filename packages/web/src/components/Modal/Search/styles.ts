import { styled } from '../../../../stitches.config'

export const Modal = styled('div', {
  backgroundColor: 'var(--colors-background-primary)',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '9999',
  overflowY: 'auto',
  overflowX: 'hidden',
  transition: 'opacity 0.2s ease-in-out'
})

export const Container = styled('div', {
  height: '100%',

  '.mobile-button': {
    position: 'absolute',
    top: '15px',
    left: '15px',

    '.fa-angle-left': {
      fontSize: '1.375rem',
      color: 'var(--colors-regular)',
      marginLeft: '-1px'
    },

    '&:hover .fa': {
      color: 'var(--colors-white)'
    }
  },

  '.search-container': {
    display: 'initial !important',
    width: '100%',
    height: '100%',

    form: {
      padding: '15px 15px 15px 75px',
      borderBottom: '1px solid var(--colors-background-tertiary)'
    },

    '.search-results': {
      marginTop: '-1px'
    }
  }
})
