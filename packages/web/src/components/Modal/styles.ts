import { styled } from '../../../stitches.config'

export const StyledModal = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  overflowY: 'auto',

  '.modal-container': {
    width: '100vw',
    minHeight: '100%',
    backgroundColor: 'var(--colors-background-primary)',
    display: 'flex',
    flexDirection: 'column',

    '> header': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px'
    },

    '.content-container': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '10px',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingBottom: '20px'
    },

    '.actions-container': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '15px',
      padding: '20px',

      button: {
        minWidth: '100%'
      }
    }
  },

  '@bp768': {
    '.modal-container .actions-container': {
      flexDirection: 'row',
      gap: '20px',

      button: {
        minWidth: 'calc(50vw - 30px)'
      }
    }
  },

  '@bp990': {
    display: 'grid',
    alignItems: 'center',
    padding: '20px',

    '.modal-container': {
      height: 'fit-content',
      maxWidth: '580px',
      minHeight: 'initial',
      borderRadius: '20px',

      '.actions-container': {
        flexDirection: 'row',

        button: {
          minWidth: '115px'
        }
      }
    }
  },

  variants: {
    opened: {
      true: {
        opacity: '1'
      }
    },
    overlay: {
      true: {
        '@bp990': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(6px)',
          overflowY: 'auto'
        }
      }
    },
    position: {
      left: {
        '@bp990': {
          justifyContent: 'left'
        }
      },
      right: {
        '@bp990': {
          justifyContent: 'right'
        }
      },
      center: {
        '@bp990': {
          justifyContent: 'center'
        }
      }
    },
    full: {
      true: {
        '@bp990': {
          '.modal-container': {
            height: '100%'
          }
        }
      }
    },
    firefoxAgent: {
      true: {
        background: 'rgba(0, 0, 0, 0.4)'
      }
    },
    hideHeader: {
      true: {
        '.modal-container > header': {
          display: 'none'
        }
      }
    },
    hideActions: {
      true: {
        '.modal-container .actions-container': {
          display: 'none'
        }
      }
    }
  },

  compoundVariants: [
    {
      overlay: false,
      firefoxAgent: true,
      css: {
        background: 'transparent'
      }
    },
    {
      hideHeader: true,
      hideActions: true,
      css: {
        '.modal-container .content-container': {
          padding: 0
        }
      }
    }
  ],

  defaultVariants: {
    overlay: true,
    position: 'center',
    full: false,
    hideHeader: false,
    hideActions: false
  }
})
