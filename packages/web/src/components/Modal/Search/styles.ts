import styled from 'styled-components'

interface ModalProps {
  modalIsOpen: boolean
}

export const Modal = styled.div<ModalProps>`
  background-color: var(--color-darker);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow-y: auto;
  overflow-x: hidden;
  opacity: ${props => (props.modalIsOpen ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
`

export const Container = styled.div`
  height: 100%;

  .mobile-button {
    position: absolute;
    top: 15px;
    left: 15px;

    .fa-angle-left {
      font-size: 22px;
      color: var(--color-regular);
      margin-left: -1px;
    }

    &:hover .fa {
      color: #ffffff;
    }
  }

  .search-container {
    display: initial !important;
    width: 100%;
    height: 100%;

    > form {
      padding: 15px 15px 15px 75px;
      border-bottom: 1px solid var(--color-light);
    }

    .search-results {
      margin-top: -1px;
    }
  }
`
