import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #3366ef;
    --color-regular: #8591A3;
    --color-light: #2a3646;
    --color-lighter: #222c3a;
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

    @media screen and (min-width: 768px) {
      scrollbar-color: var(--color-light) var(--color-lighter);

      ::-webkit-scrollbar {
        width: 15px;
        background-color: var(--color-lighter);
      }

      ::-webkit-scrollbar-thumb {
        background: var(--color-light);
      }
    }
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    cursor: pointer;

    span {
      font-family: 'Fira Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }
  }

  .button-medium {
    padding: 10px 22px 9px;
  }

  .button-large {
    padding: 12px 22px;
  }

  .button-primary {
    background-color: var(--color-primary);
    border: none;
    border-radius: 30px;
    color: #ffffff;

    .fa {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  .button-outline {
    background-color: transparent;
    border: 2px solid var(--color-light);
    border-radius: 30px;
    color: #ffffff;
  }

  .button-primary:hover, .button-outline:hover {
    opacity: 0.9;
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

  input, textarea, button, select, a, div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    outline: none;
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
`
