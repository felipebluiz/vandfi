import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  position: 'relative',
  width: '100%',
  backgroundColor: 'transparent',
  border: '1px solid var(--colors-background-quaternary)',
  borderRadius: '30px',

  label: {
    position: 'absolute',
    top: '-12px',
    left: '17px',
    background: 'var(--colors-background-primary)',
    fontSize: 'var(--fontSizes-xs)',
    padding: '2px 4px',
    borderRadius: '3px'
  },

  variants: {
    focus: {
      true: {
        border: '1px solid #334154',
        backgroundColor: 'var(--colors-dark) !important',
        WebkitBoxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px',
        MozBoxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px',
        boxShadow: 'rgb(255 255 255 / 6%) 0px 0px 0px 3px'
      }
    }
  },

  defaultVariants: {
    focus: false
  }
})

export const StyledTextField = styled('input', {
  width: '100%',
  fontSize: 'var(--fontSizes-sm)',
  fontFamily: 'var(--fonts-default)',
  padding: '14px 22px',
  background: 'transparent',
  border: 'none',
  color: 'var(--colors-white)'
})
