import { globalCss } from '../../../stitches.config'

export const GlobalStyle = globalCss({
  '*': {
    margin: '0',
    boxSizing: 'border-box'
  },

  html: {
    overflowY: 'scroll',

    '@media screen and (max-width: 1023px)': {
      paddingRight: '0 !important'
    }
  },

  'html, body': {
    padding: '0',
    margin: '0',
    height: '100%',
    backgroundColor: 'var(--colors-background-primary)',
    color: 'var(--colors-regular)',
    fontFamily: 'var(--fonts-default)',

    '@bp3': {
      scrollbarColor:
        'var(--colors-background-quaternary) var(--colors-background-secundary)',

      '::-webkit-scrollbar': {
        width: '15px',
        backgroundColor: 'var(--colors-background-secundary)'
      },

      '::-webkit-scrollbar-thumb': {
        background: 'var(--colors-background-quaternary)'
      }
    }
  },

  'h1, h2, h3, p': {
    margin: '0',
    padding: '0'
  },

  a: {
    textDecoration: 'none'
  },

  button: {
    margin: '0',
    padding: '0',
    fontFamily: 'var(--fonts-default)',
    cursor: 'pointer'
  },

  '.main-wrapper': {
    maxWidth: '1366px',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    paddingLeft: '20px',
    paddingRight: '20px'
  },

  '::selection': {
    color: 'var(--colors-white)',
    background: 'var(--colors-primary)'
  },

  '::-moz-selection': {
    color: 'var(--colors-white)',
    background: 'var(--colors-primary)'
  },

  '::placeholder': {
    color: 'var(--colors-regular)',
    opacity: 'var(--opacity-default)'
  },

  ':-ms-input-placeholder': {
    color: 'var(--colors-regular)'
  },

  '::-ms-input-placeholder': {
    color: 'var(--colors-regular)'
  },

  'input, textarea, button, select, a, div': {
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    WebkitAppearance: 'none',
    outline: 'none'
  },

  '.fa': {
    height: '1em'
  },

  '@bp2': {
    '.main-wrapper': {
      paddingLeft: '25px',
      paddingRight: '25px'
    }
  }
})
