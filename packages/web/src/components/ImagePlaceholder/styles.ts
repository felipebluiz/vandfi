import styled from 'styled-components'

interface ContainerProps {
  width: string
  height: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  max-width: ${props => `${props.width}px`};
  max-height: ${props => `${props.height}px`};
`
