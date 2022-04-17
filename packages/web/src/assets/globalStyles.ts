import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #3366ef;
    --color-regular: #8591A3;
    --color-light: #2a3646;
    --color-darker: #1A2433;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: var(--color-darker);
    color: var(--color-regular);
    font-family: 'Fira Sans', sans-serif;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Fira Sans',sans-serif;
  }

  .main-wrapper {
    max-width: 1366px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }

  ::selection {
    color: #ffffff;
    background: var(--color-primary);
  }

  ::-moz-selection {
    color: #ffffff;
    background: var(--color-primary);
  }

  ::placeholder {
    color: var(--color-regular);
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: var(--color-regular);
  }

  ::-ms-input-placeholder {
    color: var(--color-regular);
  }

  input {
    width: 100%;
    font-size: 14px;
    font-family: 'Fira Sans', sans-serif;
    padding: 12px 20px 11px;
    color: #ffffff;
    background-color: transparent;
    border: 1px solid var(--color-light);
    border-radius: 30px;
    outline: none;

    &:focus {
      border: 1px solid var(--color-light);
      background-color: var(--color-dark);
      box-shadow: rgb(255 255 255 / 6%) 0px 0px 0px 4px;
    }
  }


  @media screen and (min-width: 768px) {
    .main-wrapper {
      padding-left: 25px;
      padding-right: 25px;
    }
  }

  @media screen and (min-width: 1366px) {
    padding-left: 0;
    padding-right: 0;
    box-sizing: content-box;
  }
`
