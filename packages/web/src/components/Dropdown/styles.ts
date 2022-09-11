import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'relative',

  '.dropdown-container': {
    position: 'absolute',
    top: '55px',
    right: '0',
    minWidth: '200px',
    padding: '8px',
    backgroundColor: 'rgba(26, 36, 51, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid var(--colors-background-quaternary)',
    borderRadius: '10px',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',

    ul: {
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },

    li: {
      '&:hover': {
        backgroundColor: 'var(--colors-background-tertiary)',
        borderRadius: '6px'
      },

      button: {
        background: 'none',
        border: 'none'
      },

      'button, a': {
        padding: '12px 10px',
        display: 'block',
        width: '100%',
        fontSize: 'var(--fontSizes-sm)',
        fontWeight: 'var(--fontWeights-medium)',
        color: 'var(--colors-white)',
        whiteSpace: 'nowrap',
        textAlign: 'left'
      },

      '.fa': {
        fontSize: '16px',
        width: '16px',
        marginRight: '10px',

        '&.fa-flag': {
          fontSize: '14px'
        }
      }
    }
  },

  variants: {
    opened: {
      true: {
        '.dropdown-container': {
          opacity: '1'
        }
      }
    }
  }
})
