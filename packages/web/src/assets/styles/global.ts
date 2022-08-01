import { globalCss, styled } from '../../../stitches.config'

export const GlobalStyle = globalCss({
  '*': {
    margin: '0',
    boxSizing: 'border-box'
  },

  html: {
    backgroundColor: 'var(--colors-background-primary)',

    '@media screen and (max-width: 1023px)': {
      paddingRight: '0 !important'
    }
  },

  'html, body': {
    padding: '0',
    margin: '0',
    height: '100%',
    color: 'var(--colors-regular)',
    fontFamily: 'var(--fonts-default)',

    '@bp990': {
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

  'form .error-message': {
    marginTop: '8px',
    marginLeft: '22px'
  },

  '.fa': {
    height: '1em'
  },

  '.modal-open': {
    overflowY: 'hidden'
  },

  '@bp768': {
    '.main-wrapper': {
      paddingLeft: '25px',
      paddingRight: '25px'
    }
  },

  '@bp990': {
    '.modal-open': {
      overflowY: 'inherit'
    }
  }
})

export const RadialEffect = styled('div', {
  '@bp990': {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    position: 'absolute',
    zIndex: '-1',
    background:
      'radial-gradient(circle at 5% 60%, #163158, rgba(255, 255, 255, 0) 20%), radial-gradient(circle at 50% 58%, #163158, rgba(255, 255, 255, 0) 35%), radial-gradient(circle at 85% 50%, #163158, rgba(255, 255, 255, 0) 20%)'
  },

  '@bp1600': {
    background:
      'radial-gradient(circle at -10% 55%, #163158, rgba(255, 255, 255, 0) 22%), radial-gradient(circle at 52% 40%, #163158, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 70% 35%, #163158, rgba(255, 255, 255, 0) 18%), radial-gradient(circle at 110% 50%, #163158, rgba(255, 255, 255, 0) 20%)'
  }
})
