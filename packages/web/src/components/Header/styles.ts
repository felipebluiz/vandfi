import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  height: '80px',
  background: 'var(--colors-background-primary)',
  borderBottom: '1px solid var(--colors-background-tertiary)',

  '.main-wrapper': {
    display: 'grid',
    gap: '10px',
    alignItems: 'center'
  },

  '.logo-container > a': {
    '.logo': {
      width: '28px',
      height: '28px',
      fontSize: '46px'
    },

    h1: {
      fontSize: '24px'
    }
  },

  '.search-button': {
    display: 'none'
  },

  '.mobile-button, .search-button': {
    width: '44px',
    minWidth: '44px',
    height: '44px',
    backgroundColor: '#232e43',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',

    '.fa': {
      fontSize: 'var(--fontSizes-md)',
      color: 'var(--colors-regular)'
    },

    '.fa-bars': {
      fontSize: 'var(--fontSizes-lg)'
    },

    '.fa-times': {
      fontSize: 'var(--fontSizes-lg)'
    },

    '&:hover .fa': {
      color: 'var(--colors-white)'
    }
  },

  '.search-container': {
    display: 'none'
  },

  '.navigation-container': {
    display: 'none'
  },

  '.connect-wallet': {
    display: 'none'
  },

  '.avatar-container': {
    padding: '0',
    background: 'none',
    border: 'none',
    cursor: 'pointer',

    '.avatar > img': {
      width: '44px',
      height: '44px',
      borderRadius: '30px',
      verticalAlign: 'bottom'
    },

    '&:hover': {
      opacity: 'var(--opacity-semiOpaque)'
    }
  },

  '@bp1': {
    '.logo-container > a': {
      '.logo': {
        width: '35px',
        height: '35px',
        fontSize: '52px'
      },

      h1: {
        fontSize: '28px'
      }
    }
  },

  '@bp3': {
    '.main-wrapper': {
      gridTemplateColumns: '125px 43px 1fr auto !important',
      gap: '25px'
    },

    '.search-button': {
      display: 'flex'
    },

    '.search-container': {
      display: 'initial',

      form: {
        transition: 'width 0.25s',
        overflow: 'hidden'
      }
    },

    '.navigation-button': {
      display: 'none'
    },

    '.navigation-container': {
      margin: '0 auto',

      ul: {
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        margin: '0',

        li: {
          listStyle: 'none',

          a: {
            padding: '32px 29px 31px',
            borderRight: '1px solid var(--colors-background-tertiary)',
            fontSize: 'var(--fontSizes-sm)',
            fontWeight: 'var(--fontWeights-medium)',
            letterSpacing: '0.3px',
            color: 'var(--colors-regular)',

            '&:hover': {
              color: 'var(--colors-white)'
            }
          },

          '&:last-child > a': {
            borderRight: 'none'
          },

          '&.active > a': {
            color: 'var(--colors-white)'
          }
        }
      }
    },

    '.connect-wallet': {
      display: 'flex',
      padding: '10px 19px 9px'
    },

    '.avatar-container .avatar': {
      padding: '4px',
      backgroundColor: 'var(--colors-background-tertiary)',
      borderRadius: '30px',

      img: {
        width: '45px',
        height: '45px'
      }
    }
  },

  '@bp4': {
    '.main-wrapper': {
      gridTemplateColumns: 'auto 1fr auto auto !important'
    },

    '.search-button': {
      display: 'none'
    },

    '.search-container': {
      width: '100%',
      position: 'relative !important',
      overflow: 'initial',

      form: {
        width: 'initial !important',
        padding: '4px !important'
      }
    },

    '.navigation-container': {
      margin: '0 auto',

      'ul > li > a': {
        padding: '32px 32px 31px'
      }
    }
  }
})
