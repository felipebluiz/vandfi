import styled from 'styled-components'

export const Container = styled.div`
  > form {
    padding: 4px;

    > label {
      position: relative;

      .fa-search {
        position: absolute;
        top: 2px;
        left: 20px;
        color: var(--color-regular);
      }

      > button {
        position: absolute;
        top: 1px;
        right: 20px;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

        .fa-times {
          font-size: 19px;
          color: var(--color-regular);
        }

        &:hover > .fa-times {
          color: #ffffff;
        }
      }

      > input {
        width: 100%;
        font-size: 14px;
        font-family: 'Fira Sans', sans-serif;
        padding: 12px 50px 11px;
        color: #ffffff;
        background-color: #232e43;
        border: 1px solid #232e43;
        border-radius: 30px;
        outline: none;

        &:focus {
          border: 1px solid #3b4a60;
          background-color: var(--color-dark);
          box-shadow: rgb(255 255 255 / 6%) 0px 0px 0px 3px;
        }
      }
    }
  }
`
