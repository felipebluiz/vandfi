import { styled } from '../../../stitches.config'

export const StyledTooltip = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: 'fit-content',

  '.tooltip-tip': {
    position: 'absolute',
    borderRadius: '4px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 8px',
    color: 'var(--colors-white)',
    backgroundColor: 'var(--colors-black)',
    fontSize: 'var(--fontSizes-xs)',
    lineHeight: 'var(--lineHeights-shorter)',
    zIndex: '100',
    whiteSpace: 'nowrap',

    '&:before': {
      content: '" "',
      left: '50%',
      border: 'solid transparent',
      height: '0',
      width: '0',
      position: 'absolute',
      pointerEvents: 'none',
      borderWidth: '6px',
      marginLeft: 'calc(6px * -1)'
    }
  },

  variants: {
    direction: {
      top: {
        '.tooltip-tip': {
          top: 'calc(40px * -1)',

          '&:before': {
            top: '100%',
            borderTopColor: 'var(--colors-black)'
          }
        }
      },
      right: {
        '.tooltip-tip': {
          left: 'calc(100% + 12px)',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',

          '&:before': {
            left: 'calc(6px * -1)',
            top: '50%',
            transform: 'translateX(0) translateY(-50%)',
            borderRightColor: 'var(--colors-black)'
          }
        }
      },
      bottom: {
        '.tooltip-tip': {
          bottom: 'calc(40px * -1)',

          '&:before': {
            bottom: '100%',
            borderBottomColor: 'var(--colors-black)'
          }
        }
      },
      left: {
        '.tooltip-tip': {
          left: 'auto',
          right: 'calc(100% + 12px)',
          top: '50%',
          transform: 'translateX(0) translateY(-50%)',

          '&:before': {
            left: 'auto',
            right: 'calc(6px * -2)',
            top: '50%',
            transform: 'translateX(0) translateY(-50%)',
            borderLeftColor: 'var(--colors-black)'
          }
        }
      }
    }
  }
})
