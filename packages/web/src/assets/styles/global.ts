import { globalCss } from '../../../stitches.config'

export const GlobalStyle = globalCss({
  '*': {
    boxSizing: 'border-box'
  },

  'html, body': {
    padding: '0',
    margin: '0',
    height: '100%',
    backgroundColor: 'var(--colors-background-primary)',
    color: 'var(--colors-regular)',
    fontFamily: 'var(--fonts-default)',

    '@bp2': {
      scrollbarColor:
        'var(--colors-background-tertiary) var(--colors-background-secundary)',

      '::-webkit-scrollbar': {
        width: '15px',
        backgroundColor: 'var(--colors-background-secundary)'
      },

      '::-webkit-scrollbar-thumb': {
        background: 'var(--colors-background-tertiary)'
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    margin: '0',
    cursor: 'pointer',

    span: {
      fontFamily: 'var(--fonts-default)',
      fontSize: 'var(--fontSizes-sm)',
      fontWeight: 'var(--fontWeights-medium)',
      letterSpacing: '0.3px'
    }
  },

  '.button-medium': {
    padding: '10px 22px 9px'
  },

  '.button-large': {
    padding: '12px 22px'
  },

  '.button-primary': {
    backgroundColor: 'var(--colors-primary)',
    border: 'none',
    borderRadius: '30px',
    color: 'var(--colors-white)',

    '.fa': {
      fontSize: 'var(--fontSizes-md)',
      marginRight: '10px'
    }
  },

  '.button-outline': {
    backgroundColor: 'transparent',
    border: '2px solid var(--colors-background-tertiary)',
    borderRadius: '30px',
    color: 'var(--colors-white)'
  },

  '.button-primary:hover, .button-outline:hover': {
    opacity: 'var(--opacity-semiOpaque)'
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
    outline: 'none'
  },

  input: {
    width: '100%',
    fontSize: 'var(--fontSizes-sm)',
    fontFamily: 'var(--fonts-default)',
    padding: '12px 20px 11px',
    color: 'var(--colors-white)',
    backgroundColor: 'transparent',
    border: '1px solid var(--colors-background-tertiary)',
    borderRadius: '30px',
    outline: 'none',

    '&:focus': {
      border: '1px solid var(--colors-background-tertiary)',
      backgroundColor: 'var(--colors-dark)',
      boxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 4px'
    }
  },

  '@bp2': {
    '.main-wrapper': {
      paddingLeft: '25px',
      paddingRight: '25px'
    }
  }
})
