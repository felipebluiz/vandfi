import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'sticky',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
  height: '80px',
  background: 'var(--colors-background-primary)',
  borderBottom: '1px solid var(--colors-background-quaternary)',

  '.main-wrapper': {
    display: 'grid',
    gridTemplateColumns: '1fr auto auto',
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

  '.search-container': {
    display: 'none'
  },

  '.navigation-container': {
    display: 'none'
  },

  '.connect-wallet': {
    display: 'none'
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
      display: 'flex',

      '.fa-times': {
        fontSize: 'var(--fontSizes-lg)'
      }
    },

    '.search-container': {
      position: 'absolute',
      display: 'initial',

      form: {
        width: '0px',
        padding: '0',
        margin: '4px',
        transition: 'width 0.25s',
        overflow: 'hidden'
      }
    },

    '.navigation-button': {
      display: 'none'
    },

    '.navigation-container': {
      display: 'none',
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
            borderRight: '1px solid var(--colors-background-quaternary)',
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
      padding: '10px 19px',

      span: {
        marginBottom: '-1px'
      }
    },

    '.avatar': {
      minWidth: '52px',
      width: '52px',
      height: '52px',

      '.fa-check-circle': {
        fontSize: 'var(--fontSizes-md)',
        right: '2px',
        bottom: '-2px'
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
  },

  variants: {
    loggedIn: {
      true: {
        '.main-wrapper': {
          gridTemplateColumns: '1fr auto auto auto'
        }
      }
    },
    searchPosition: {
      true: {
        '@bp3': {
          '.search-container': {
            position: 'relative'
          }
        }
      }
    },
    searchVisibility: {
      true: {
        '@bp3': {
          '.search-container form': {
            width: '100%'
          }
        }
      }
    },
    searchContainerPadding: {
      true: {
        '@bp3': {
          '.search-container form': {
            padding: '4px',
            margin: '0'
          }
        }
      }
    },
    navigationVisibility: {
      true: {
        '@bp3': {
          '.navigation-container': {
            display: 'initial'
          }
        }
      }
    }
  }
})
