import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
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

      '.avatar': {
        opacity: '1 !important'
      },

      '.profile-info-container': {
        '.wallet-address': {
          color: 'var(--colors-white)'
        },

        p: {
          lineHeight: 'var(--lineHeights-short)'
        }
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
      marginBottom: '12px',

      '&:last-child': {
        marginBottom: '0'
      },

      '.eth, .weth': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
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
        lineHeight: 'var(--lineHeights-shorter)',

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
          display: 'flex',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--colors-background-quaternary)',
          fontSize: 'var(--fontSizes-md)',
          fontWeight: 'var(--fontWeights-medium)',
          letterSpacing: '0.3px',
          color: 'var(--colors-regular)',

          '.fa': {
            width: '18px',
            fontSize: 'var(--fontSizes-md)',
            marginTop: '-1px',
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

  '.logout-button': {
    padding: '14px 22px',

    '.fa': {
      marginTop: '-1px'
    }
  },

  '@bp990': {
    padding: '30px',

    header: {
      marginBottom: '30px',

      '.profile-container p.link': {
        fontSize: 'var(--fontSizes-xs)'
      },

      '.close-button': {
        width: '40px',
        height: '40px'
      }
    },

    '.crypto-container .item-container': {
      '.eth, .weth': {
        width: '40px',
        height: '40px'
      },

      '.info-container': {
        '.crypto': {
          lineHeight: 'var(--lineHeights-short)',
          fontSize: 'var(--fontSizes-xs)'
        },

        '.amount': {
          fontSize: 'var(--fontSizes-sm)'
        }
      }
    },

    '.navigation-container ul li a': {
      fontSize: 'var(--fontSizes-sm)'
    }
  }
})
