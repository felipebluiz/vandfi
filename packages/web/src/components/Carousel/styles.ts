import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'relative',

  '.carousel-icon': {
    position: 'absolute',
    zIndex: '2',
    top: '50%',
    transform: 'translateY(-50%)',

    '&.left': {
      left: '-12px'
    },

    '&.right': {
      right: '-12px'
    },

    '.fa-angle-left, .fa-angle-right': {
      fontSize: '24px'
    },

    '.fa-angle-left': {
      marginLeft: '-2px'
    },

    '.fa-angle-right': {
      marginRight: '-2px'
    }
  },

  '.items': {
    display: 'flex',
    gap: '15px',
    padding: '4px 0',
    overflowX: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '.item, .article': {
      width: '100%',
      minWidth: '100%',
      MozUserSelect: 'none'
    }
  },

  '@bp768': {
    '.items': {
      '.item, .article': {
        width: 'calc(50% - 9px)',
        minWidth: 'calc(50% - 9px)',
        maxWidth: 'initial'
      }
    }
  },

  '@bp1024': {
    '.items': {
      '.item, .article': {
        width: 'calc(33.33% - 11px)',
        minWidth: 'calc(33.33% - 11px)',
        transition: 'all 0.15s ease-in-out 0s',

        '&:hover': {
          transform: 'translateY(-4px)'
        }
      }
    }
  },

  '@bp1280': {
    '.items': {
      '.item': {
        width: 'calc(25% - 12px)',
        minWidth: 'calc(25% - 12px)'
      },

      '.article': {
        width: 'calc(33.33% - 12px)',
        minWidth: 'calc(33.33% - 12px)'
      }
    }
  }
})
