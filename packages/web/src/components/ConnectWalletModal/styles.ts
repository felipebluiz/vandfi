import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  '.buttons-container': {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',

    button: {
      padding: '18px 15px',
      borderRadius: '10px',

      span: {
        fontSize: 'var(--fontSizes-md)',
        color: 'var(--colors-white)'
      },

      '.wallet-icon': {
        position: 'absolute',
        top: '15px',
        left: '15px',
        fontSize: '26px',
        width: '26px',

        '&.wallet-connect': {
          top: '20px'
        },

        '&.portis': {
          top: '12px',
          width: '29px'
        }
      }
    }
  }
})
