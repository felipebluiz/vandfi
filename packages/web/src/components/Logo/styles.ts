import styled from 'styled-components'

interface ContainerProps {
  animation?: boolean
}

export const Container = styled.div<ContainerProps>`
  @keyframes zoomAnimation {
    0% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.1, 1.1);
    }

    100% {
      transform: scale(1, 1);
    }
  }

  > a {
    width: fit-content;
    display: flex;
    align-items: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .logo {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--color-primary);
      border-radius: 5px;
      font-size: 52px;
      font-weight: 700;
      color: #ffffff;
      margin-right: 10px;
      overflow: hidden;
    }

    h1 {
      font-size: 28px;
      color: #ffffff;
    }

    &:hover {
      animation: ${props =>
        props.animation ? 'zoomAnimation 1s infinite' : 'none'};
    }
  }
`
