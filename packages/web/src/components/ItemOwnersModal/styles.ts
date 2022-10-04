import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '.list-item': {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    background: 'none',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',

    '.avatar:hover': {
      opacity: 'var(--opacity-default)'
    },

    '.info-container': {
      display: 'grid',
      gap: '3px',
      width: '100%',
      paddingTop: '15px',
      paddingBottom: '15px',
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
  },

  '.loading-container': {
    margin: '10px 0'
  },

  '@bp990': {
    maxHeight: '332px',
    paddingRight: '20px',
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
})
