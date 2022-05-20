import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  height: '100%',

  '.back-button': {
    position: 'absolute',
    top: '15px',
    left: '15px',

    '.fa-angle-left': {
      fontSize: '1.375rem',
      marginLeft: '-1px'
    }
  },

  '.search-container': {
    display: 'initial !important',
    width: '100%',
    height: '100%',

    form: {
      padding: '15px 15px 15px 75px',
      borderBottom: '1px solid var(--colors-background-quaternary)'
    },

    '.search-results': {
      marginTop: '-1px',

      '.section-title:first-child': {
        paddingTop: '18px'
      }
    }
  }
})
