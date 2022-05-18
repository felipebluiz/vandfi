import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: '20px',

  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '25px',

    '.profile-container': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      cursor: 'pointer',
      borderRadius: '10px',

      '&:hover': {
        opacity: 'var(--opacity-semiOpaque)'
      },

      '.profile-info-container': {
        '.wallet-address': {
          color: 'var(--colors-white)'
        },

        p: {
          lineHeight: 'var(--lineHeights-short)'
        }
      }
    },

    '.close-button': {
      width: '44px',
      height: '44px',

      '.fa-times': {
        fontSize: 'var(--fontSizes-lg)'
      }
    }
  },

  '.crypto-container': {
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: 'var(--colors-background-tertiary)',
    borderRadius: '10px',

    '.item-container': {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',

      '&:last-child': {
        marginBottom: '0'
      },

      '.eth, .weth': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        backgroundColor: 'var(--colors-background-primary)',
        borderRadius: '100px',

        '.fa': {
          fontSize: 'var(--fontSizes-2xl)'
        }
      },

      '.eth .fa': {
        color: 'var(--colors-eth)'
      },

      '.weth .fa': {
        color: 'var(--colors-weth)'
      },

      p: {
        lineHeight: 'var(--lineHeights-short)',

        '&.amount': {
          color: 'var(--colors-white)'
        }
      }
    }
  },

  '.navigation-container': {
    flex: 1,
    marginBottom: '10px',

    ul: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      margin: '0',

      li: {
        listStyle: 'none',

        a: {
          display: 'block',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--colors-background-quaternary)',
          fontSize: 'var(--fontSizes-sm)',
          fontWeight: 'var(--fontWeights-medium)',
          letterSpacing: '0.3px',
          color: 'var(--colors-regular)',

          '.fa': {
            width: '18px',
            fontSize: 'var(--fontSizes-md)',
            marginRight: '10px'
          }
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

  '.logout-button .fa': {
    marginTop: '-1px'
  },

  '@bp3': {
    height: '100%',
    padding: '30px',

    header: {
      marginBottom: '30px',

      '.close-button': {
        width: '38px',
        height: '38px',

        '.fa-times': {
          fontSize: 'var(--fontSizes-md)'
        }
      }
    }
  }
})
