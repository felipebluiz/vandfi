import { styled } from '../../../stitches.config'

export const Container = styled('header', {
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
    alignItems: 'center',

    '.navigation-container': {
      display: 'none'
    },

    '.connect-wallet': {
      display: 'none'
    }
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

  '@bp360': {
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

  '@bp990': {
    '.main-wrapper': {
      gridTemplateColumns: '125px 43px 1fr auto !important',
      gap: '25px',

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
              color: 'var(--colors-regular)'
            },

            '&:last-child > a': {
              borderRight: 'none'
            },

            '&:hover > a, &.active > a': {
              color: 'var(--colors-white)'
            }
          }
        }
      },

      '.connect-wallet': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        padding: '0',

        '.fa': {
          marginRight: '0'
        },

        span: {
          display: 'none'
        }
      },

      '.avatar': {
        minWidth: '52px',
        width: '52px',
        height: '52px',

        '.check-circle': {
          width: '16px',
          height: '16px',
          right: '2px',
          bottom: '-2px',

          '.fa-check': {
            width: '10px !important',
            fontSize: '10px',
            marginTop: '2px'
          }
        }
      }
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
    }
  },

  '@bp1024': {
    '.main-wrapper .connect-wallet': {
      width: 'initial',
      height: 'initial',
      padding: '12px 19px',

      '.fa': {
        marginRight: '10px'
      },

      span: {
        display: 'initial',
        marginBottom: '-1px'
      }
    }
  },

  '@bp1280': {
    '.main-wrapper': {
      gridTemplateColumns: 'auto 1fr auto auto !important',

      '.navigation-container': {
        margin: '0 auto',

        'ul > li > a': {
          padding: '32px 32px 31px'
        }
      }
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
        '@bp990': {
          '.search-container': {
            position: 'relative'
          }
        }
      }
    },
    searchVisibility: {
      true: {
        '@bp990': {
          '.search-container form': {
            width: '100%'
          }
        }
      }
    },
    searchContainerPadding: {
      true: {
        '@bp990': {
          '.search-container form': {
            padding: '4px',
            margin: '0'
          }
        }
      }
    },
    navigationVisibility: {
      true: {
        '@bp990': {
          '.main-wrapper .navigation-container': {
            display: 'initial'
          }
        }
      }
    }
  }
})
