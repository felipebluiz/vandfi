import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  paddingTop: '20px',
  paddingBottom: '20px',
  height: '2000px',

  '.welcome': {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    paddingTop: '20px',

    '.section-title': {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '15px',
      color: 'var(--colors-white)',
      fontWeight: 'var(--fontWeights-medium)',

      img: {
        width: '28px',
        height: '28px',

        '&.fire': {
          marginTop: '-5px'
        }
      }
    },

    '> div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',

      '> h2': {
        fontSize: '2.4rem',
        lineHeight: 'var(--lineHeights-shorter)',
        maxWidth: '280px',
        marginBottom: '-10px'
      },

      '> p': {
        maxWidth: '360px'
      },

      '.buttons-container': {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',

        '.fa': {
          marginTop: '-1px'
        }
      },

      '.top-bid-container': {
        marginTop: '20px',

        '.bid': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '15px',
          width: 'max-content',
          maxWidth: '400px',
          padding: '15px',
          background:
            'linear-gradient(to right, var(--colors-background-tertiary), transparent 100%)',
          borderRadius: '10px',

          '.info': {
            marginTop: '5px',

            '> p': {
              lineHeight: 'var(--lineHeights-short)'
            }
          }
        }
      }
    },

    '.featured': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',

      '.image-container': {
        backgroundColor: 'var(--colors-card-item-background)',
        borderRadius: '15px',

        img: {
          padding: '10px',
          borderRadius: '22px',

          '&.image-1': {
            width: '100%'
          },

          '&.image-2, &.image-3': {
            display: 'none'
          }
        }
      },

      '.card': {
        width: '100%',
        padding: '5px 20px 20px',

        '> div:first-child': {
          '.title, .creator': {
            display: 'flex',
            alignItems: 'center',
            gap: '5px',

            p: {
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            },

            '.verified-icon': {
              marginTop: '-2px'
            }
          }
        },

        '.countdown': {
          position: 'absolute',
          bottom: '222px'
        },

        '> div:last-child': {
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '15px',

          '> button': {
            width: '100%'
          }
        }
      }
    },

    '.top-bid-container .value, .featured .value': {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',

      '.fa-ethereum': {
        color: 'var(--colors-white)'
      },

      '.amount': {
        color: 'var(--colors-white)'
      }
    }
  },

  '@bp390': {
    '.welcome > div:first-child > h2': {
      fontSize: 'var(--fontSizes-6xl)',
      lineHeight: '120%',
      maxWidth: '380px'
    }
  },

  '@bp460': {
    '.welcome': {
      '.section-title': {
        justifyContent: 'center'
      },

      '> div:first-child': {
        alignItems: 'center',

        h2: {
          fontSize: 'var(--fontSizes-6xl)'
        },

        '> h2, > p': {
          textAlign: 'center'
        },

        '.top-bid-container .bid': {
          background: 'var(--colors-background-tertiary)'
        }
      },

      '.featured': {
        alignItems: 'center',

        '.card': {
          '.countdown': {
            bottom: '160px'
          },

          '> div:last-child': {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '25px',
            marginTop: '15px',

            '> button': {
              width: 'initial'
            }
          }
        }
      }
    }
  },

  '@bp990': {
    '.welcome': {
      flexDirection: 'row',
      gap: '30px',

      '.section-title': {
        justifyContent: 'start'
      },

      '> div:first-child': {
        alignItems: 'start',

        h2: {
          lineHeight: '120%'
        },

        '> h2, > p': {
          textAlign: 'left'
        },

        '.top-bid-container .bid': {
          background:
            'linear-gradient(to right, var(--colors-background-tertiary), transparent 100%)',
          border: 'none'
        }
      },

      '.featured': {
        flex: '1',
        height: 'inherit',

        '.section-title': {
          display: 'none'
        },

        '.image-container': {
          position: 'relative',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: 'none',
          background: 'none',

          img: {
            position: 'absolute',
            maxWidth: '440px',
            width: '440px',
            height: '440px',
            padding: '0',
            borderRadius: '20px',
            WebkitBoxShadow: '5px -5px 5px 2px rgb(0 0 0 / 5%) ',
            boxShadow: '5px -5px 5px 2px rgb(0 0 0 / 5%)',

            '&.image-1': {
              top: '81px',
              left: '18px',
              zIndex: 2,
              transform: 'rotate(-5deg)'
            },

            '&.image-2': {
              display: 'initial',
              top: '55px',
              left: '58px',
              zIndex: 1,
              transform: 'rotate(5deg)'
            },

            '&.image-3': {
              display: 'initial',
              top: '35px',
              left: '103px',
              zIndex: 0,
              transform: 'rotate(15deg)'
            }
          }
        },

        '.card': {
          position: 'absolute',
          left: '-20px',
          bottom: '-15px',
          maxWidth: '400px',
          padding: '18px 22px',
          backgroundColor: 'var(--colors-card-item-background)',
          borderRadius: '10px',
          zIndex: 10,

          '.countdown': {
            top: '-20px',
            bottom: 'initial',
            right: '10px'
          }
        }
      }
    }
  },

  '@bp1190': {
    '.welcome': {
      '> div:first-child > h2': {
        fontSize: '3.25rem',
        lineHeight: 'var(--lineHeights-shorter)'
      }
    }
  },

  variants: {
    featuredItem: {
      true: {
        '@bp990': {
          '.welcome .featured .image-container': {
            width: '476px',
            height: '476px',

            '> a': {
              cursor: 'default',
              pointerEvents: 'none'
            },

            img: {
              top: '30px !important'
            }
          }
        }
      },
      false: {
        '@bp990': {
          '.welcome .featured .image-container': {
            width: '520px',
            height: '480px',

            img: {
              width: '380px !important',
              height: '380px'
            },

            '@bp1190': {
              width: '590px',
              height: '540px',

              img: {
                maxWidth: '100% !important',
                width: '440px !important',
                height: '440px'
              }
            }
          }
        }
      }
    }
  }
})
