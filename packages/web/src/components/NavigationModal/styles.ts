import { styled, keyframes } from '../../../stitches.config'

export const revealLinks = keyframes({
  from: { transform: 'translateY(20px)' },
  to: {
    opacity: '1',
    transform: 'none'
  }
})

export const Container = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '20px',
  paddingRight: '20px',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '79px',
    minHeight: '79px',

    '.fa-times': {
      fontSize: 'var(--fontSizes-lg)'
    }
  },

  '.content': {
    flex: '1',

    ul: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0',

      li: {
        listStyle: 'none',
        opacity: '0',
        animation: `${revealLinks} .5s forwards`,

        a: {
          display: 'block',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--colors-background-quaternary)',
          fontSize: 'var(--fontSizes-md)',
          fontWeight: 'var(--fontWeights-medium)',
          letterSpacing: '0.3px',
          color: 'var(--colors-regular)'
        },

        '&:last-child a': {
          borderBottom: 'none'
        },

        '&:hover > a, &.active > a': {
          color: 'var(--colors-white)'
        }
      }
    }
  },

  footer: {
    paddingTop: '20px',
    paddingBottom: '20px',

    '.socials-container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '20px',
      marginTop: '20px',
      borderTop: '1px solid var(--colors-background-quaternary)',

      '.fa-instagram': {
        fontSize: 'var(--fontSizes-lg)'
      }
    }
  }
})
