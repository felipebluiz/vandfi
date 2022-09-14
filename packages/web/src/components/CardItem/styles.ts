import { styled } from '../../../stitches.config'

export const StyledCard = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  backgroundColor: 'var(--colors-card-item-background)',
  borderRadius: '15px',

  '.image-container': {
    position: 'relative',
    padding: '12px 12px 0',

    '.buttons': {
      opacity: 0,
      position: 'absolute',
      transition: 'opacity 0.25s ease-in-out 0s',

      span: {
        fontWeight: 'var(--fontWeights-regular)',
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--colors-white)',
        marginTop: '1px'
      }
    },

    '.rarity': {
      left: '20px',
      top: '20px',

      button: {
        padding: '6px 12px',

        img: {
          filter: 'brightness(0) invert(1)',
          marginLeft: '-2px',
          marginTop: '-1px',
          marginRight: '8px'
        }
      }
    },

    '.like': {
      right: '20px',
      top: '20px',
      padding: '6px 12px',

      '.fa': {
        fontSize: '14px',
        marginRight: '8px'
      },

      '.spinner': {
        marginTop: '1px'
      }
    },

    '.countdown': {
      position: 'absolute',
      left: '20px',
      bottom: '12px'
    },

    'a > img': {
      width: '100%',
      borderRadius: '10px'
    }
  },

  '.content-container': {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '12px 20px 20px',

    '.info': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',

      '.owner': {
        flex: '1',
        display: 'flex',
        gap: '10px',
        overflow: 'hidden',
        paddingBottom: '2px',

        '> div': {
          overflow: 'hidden',

          p: {
            whiteSpace: 'nowrap'
          },

          '.owner-name': {
            color: 'var(--colors-white)',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
          }
        }
      },

      '.price': {
        textAlign: 'right',

        '.value': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flexWrap: 'nowrap',
          gap: '6px',
          marginTop: '-3px',

          '.fa': {
            fontSize: '14px'
          },

          '.fa, .amount': {
            color: 'var(--colors-white)'
          },

          '.amount': {
            whiteSpace: 'nowrap',
            letterSpacing: '0.5px'
          }
        }
      }
    },

    '.actions': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '5px',

      '.history-button': {
        padding: '12px 0',

        '.fa': {
          fontSize: '14px'
        },

        span: {
          fontWeight: 'var(--fontWeights-regular)'
        },

        '&:hover': {
          opacity: 'var(--opacity-semiOpaque)'
        }
      }
    }
  },

  '&:hover': {
    '.image-container > .buttons': {
      opacity: 'var(--opacity-default)'
    }
  }
})
