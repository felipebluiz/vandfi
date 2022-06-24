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
    overflowX: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none'
    },

    '.card-item': {
      width: '100%',
      minWidth: '100%',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none'
    }
  },

  '@bp768': {
    '.items .card-item': {
      width: 'calc(50% - 9px)',
      minWidth: 'calc(50% - 9px)',
      maxWidth: 'initial'
    }
  },

  '@bp1024': {
    '.items .card-item': {
      width: 'calc(33.33% - 11px)',
      minWidth: 'calc(33.33% - 11px)'
    }
  },

  '@bp1280': {
    '.items .card-item': {
      width: 'calc(25% - 12px)',
      minWidth: 'calc(25% - 12px)'
    }
  }
})
