import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  form: {
    padding: '4px',

    label: {
      position: 'relative',

      '.fa-search': {
        position: 'absolute',
        top: '2px',
        left: '15px',
        color: 'var(--colors-regular)'
      },

      button: {
        position: 'absolute',
        top: '1px',
        right: '16px',
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',

        '.fa-times': {
          fontSize: 'var(--fontSizes-lg)',
          color: 'var(--colors-regular)'
        },

        '&:hover > .fa-times': {
          opacity: 'var(--opacity-intense)'
        }
      },

      input: {
        width: '100%',
        fontSize: 'var(--fontSizes-sm)',
        fontFamily: 'var(--fonts-default)',
        padding: '13px 42px 12px',
        color: 'var(--colors-white)',
        backgroundColor: 'var(--colors-background-tertiary)',
        border: '1px solid var(--colors-background-tertiary)',
        borderRadius: '30px',

        '&:focus': {
          border: '1px solid #334154',
          backgroundColor: 'var(--colors-dark)',
          WebkitBoxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px',
          MozBoxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px',
          boxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px'
        }
      }
    }
  },

  '.search-results-container .search-results': {
    '.section-title': {
      paddingLeft: '20px',

      '&:first-child': {
        paddingTop: '12px'
      },

      span: {
        fontSize: 'var(--fontSizes-sm)',
        fontWeight: 'var(--fontWeights-medium)'
      }
    },

    '.section-list': {
      padding: '10px 20px',
      display: 'flex',
      flexDirection: 'column',

      '.list-item': {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: 'none',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',

        '&:last-child': {
          borderBottom: 'none'
        },

        '.item-image': {
          width: 'inherit',
          height: 'inherit',
          borderRadius: '6px'
        },

        '.info-container': {
          display: 'grid',
          gap: '3px',
          width: '100%',
          paddingTop: '12px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--colors-background-quaternary)',

          '.name': {
            fontSize: 'var(--fontSizes-sm)',
            fontWeight: 'var(--fontWeights-medium)',
            letterSpacing: '0.3px',
            color: 'var(--colors-white)',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          },

          '.description': {
            fontSize: 'var(--fontSizes-xs)',
            fontWeight: 'var(--fontWeights-regular)',
            color: 'var(--colors-regular)'
          }
        },

        '&:hover': {
          opacity: 'var(--opacity-semiOpaque)'
        }
      }
    },

    '.button-container': {
      padding: '15px 20px 20px',

      button: {
        padding: '14px 22px'
      }
    }
  },

  '.not-found': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '30px 20px',
    textAlign: 'center',

    h2: {
      fontSize: 'var(--fontSizes-lg)',
      lineHeight: 'var(--lineHeights-base)',
      color: 'var(--colors-white)'
    },

    p: {
      marginTop: '5px'
    },

    button: {
      marginTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },

  '@bp990': {
    position: 'relative',

    '.not-found': {
      height: '250px'
    },

    '.search-results-container': {
      padding: '6px 6px 6px 0',
      width: '100%',
      height: 'initial',
      position: 'absolute',
      top: '85px',
      left: '0',
      backgroundColor: 'var(--colors-background-primary)',
      border: '1px solid var(--colors-background-quaternary)',
      borderRadius: '10px',

      '.search-results': {
        minHeight: '20px',
        maxHeight: 'calc(100vh - 180px)',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor:
          'var(--colors-background-quaternary) var(--colors-background-primary)',

        '&::-webkit-scrollbar': {
          width: '5px',
          backgroundColor: 'var(--colors-background-primary)'
        },

        '&::-webkit-scrollbar-thumb': {
          background: 'var(--colors-background-quaternary)',
          borderRadius: '5px'
        }
      }
    }
  }
})
