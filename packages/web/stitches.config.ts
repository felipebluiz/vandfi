import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      primary: '#3366EF',
      white: '#FFFFFF',
      regular: '#8591A3',
      black: '#000000',
      eth: '#6b8cef',
      weth: '#cf373e',
      'sucess-primary': '#28B833',
      'error-primary': '#FF0000',
      'warning-primary': '#FACA07',
      'background-quaternary': '#2A3646',
      'background-tertiary': '#232E43',
      'background-secundary': '#222C3A',
      'background-primary': '#1A2433',
      'hover-primary': 'rgb(51 102 239 / 90%)',
      'hover-white': 'rgb(255 255 255 / 85%)',
      'hover-background-quaternary': 'rgb(42 54 70 / 85%)',
      'hover-background-tertiary': 'rgb(35 46 67 / 85%)',
      'card-item-background': 'rgb(35 46 67 / 98%)'
    },
    fonts: {
      default: 'Fira Sans, sans-serif'
    },
    fontSizes: {
      xxs: '0.625rem',
      xs: '0.8rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem'
    },
    fontWeights: {
      small: 200,
      regular: 400,
      medium: 500,
      bold: 700
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%'
    },
    opacity: {
      default: '100%',
      semiOpaque: '90%',
      intense: '80%',
      medium: '50%',
      light: '25%',
      semiTransparent: '10%'
    }
  },
  media: {
    bp360: '(min-width: 360px)',
    bp390: '(min-width: 390px)',
    bp460: '(min-width: 460px)',
    bp768: '(min-width: 768px)',
    bp990: '(min-width: 990px)',
    bp1024: '(min-width: 1024px)',
    bp1190: '(min-width: 1190px)',
    bp1280: '(min-width: 1280px)',
    bp1600: '(min-width: 1600px)'
  },
  utils: {
    marginY: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    marginX: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value
    })
  }
})
