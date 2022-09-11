import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  gap: '50px',
  padding: '45px 0',

  '.image-container': {
    flex: 1,
    position: 'relative',

    '.like-button': {
      position: 'absolute',
      right: '20px',
      top: '20px',
      padding: '8px 14px',
      transition: 'opacity 0.25s ease-in-out 0s',

      '.fa': {
        fontSize: '14px',
        marginRight: '8px'
      },

      span: {
        fontWeight: 'var(--fontWeights-regular)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--colors-white)',
        marginTop: '1px'
      }
    },

    '.image-item': {
      width: '100%',
      maxWidth: '633px',
      maxHeight: '633px',
      borderRadius: '15px'
    }
  },

  '.content-container': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '25px',

    '.actions-container': {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '10px',
      marginTop: '-5px',

      '.owners, .editions, .favorites': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: 'fit-content',
        height: '44px',
        padding: '0 15px',
        border: '1px solid var(--colors-background-quaternary)',
        borderRadius: '100px',
        color: 'var(--colors-regular)'
      }
    },

    '.description': {
      marginTop: '-2px',

      '.show-more': {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: 'var(--fontSizes-md)',
        color: 'var(--colors-white)',

        '&:hover': {
          color: 'var(--colors-hover-white)'
        }
      }
    },

    '.info-container': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',

      '.owner, .creator, .collection': {
        maxWidth: '204px',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: 'var(--colors-background-tertiary)',
        borderRadius: '10px',
        cursor: 'pointer',

        '> button': {
          cursor: 'pointer'
        },

        '&:hover': {
          backgroundColor: 'var(--colors-hover-background-tertiary)'
        },

        '> div': {
          overflow: 'hidden',

          '.value': {
            color: 'var(--colors-white)',
            lineHeight: 'var(--lineHeights-short)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
        }
      }
    },

    '.price-container': {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px',
      marginTop: '5px',

      '.price, .countdown': {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid var(--colors-background-quaternary)',
        borderRadius: '10px',
        height: '65px',

        '.label': {
          padding: '20px 20px 18px'
        },

        '.value': {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '18px 20px'
        },

        '.separator': {
          width: '1px',
          height: '100%',
          backgroundColor: 'var(--colors-background-quaternary)'
        },

        p: {
          paddingTop: '1px',
          whiteSpace: 'nowrap'
        }
      },

      '.price .value': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexWrap: 'nowrap',
        gap: '6px',

        '.fa': {
          fontSize: '14px'
        },

        '.fa, .amount': {
          color: 'var(--colors-white)'
        },

        '.convertedAmount': {
          letterSpacing: '0.5px'
        }
      },

      '.countdown .value p': {
        color: 'var(--colors-white)',
        letterSpacing: '0.5px'
      }
    },

    '.buttons-container': {
      display: 'flex',
      marginTop: '5px',

      button: {
        flex: 1,
        padding: '21px 20px',
        borderRadius: '10px',
        position: 'relative',

        '&:first-child': {
          backgroundColor: 'var(--colors-primary)',

          '&:hover': {
            backgroundColor: 'var(--colors-hover-primary)'
          },

          '.icon-container': {
            backgroundColor: 'var(--colors-white) !important',

            '.fa': {
              color: 'var(--colors-primary) !important'
            }
          }
        },

        '.icon-container': {
          position: 'absolute',
          left: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '34px',
          height: '34px',
          borderRadius: '100px',

          '&.shopping-basket': {
            backgroundColor: 'var(--colors-background-primary)'
          },

          '.fa': {
            marginRight: 0,

            '&.fa-ethereum': {
              fontSize: '1.2rem'
            },

            '&.fa-shopping-basket': {
              color: 'var(--colors-white)'
            }
          }
        },

        span: {
          fontSize: 'var(--fontSizes-lg)',
          fontWeight: 'var(--fontWeights-bold)',
          color: 'var(--colors-white)',
          textTransform: 'uppercase'
        }
      }
    },

    '.unlockable-content': {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '18px 20px',
      marginTop: '5px',
      border: '1px solid var(--colors-background-quaternary)',
      borderRadius: '10px',

      '.fa-lock': {
        fontSize: '20px'
      },

      '.title': {
        color: 'var(--colors-white)'
      }
    }
  },

  variants: {
    multipleOwners: {
      true: {
        '.content-container': {
          '.actions-container': {
            gridTemplateColumns: 'auto auto 1fr auto auto',

            '.owners': {
              backgroundColor: 'var(--colors-background-tertiary)',
              borderColor: 'var(--colors-background-tertiary)',
              cursor: 'pointer',

              '&:hover': {
                backgroundColor: 'var(--colors-hover-background-tertiary)'
              }
            }
          },

          '.info-container': {
            justifyContent: 'start'
          }
        }
      }
    }
  }
})
