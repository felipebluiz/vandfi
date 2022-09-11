import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  '.error-message': {
    marginLeft: '15px'
  }
})
