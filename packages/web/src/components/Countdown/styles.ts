import { styled } from '../../../stitches.config'

export const StyledCountDown = styled('div', {
  backgroundColor: 'var(--colors-background-tertiary)',
  border: '2px solid var(--colors-primary)',
  borderRadius: '10px',

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px 10px'
  },

  '.fa': {
    marginRight: '3px',
    marginTop: '-1px'
  },

  '.fa, span': {
    fontSize: 'var(--fontSizes-sm)',
    color: 'var(--colors-regular)'
  },

  '.fa, .counter': {
    color: 'var(--colors-white)'
  },

  '.counter': {
    fontVariantNumeric: 'tabular-nums',
    letterSpacing: '1px'
  }
})
