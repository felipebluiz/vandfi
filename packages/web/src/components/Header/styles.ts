import styled from 'styled-components'

interface Props {
  loggedIn: boolean
  navigationVisibility: boolean
  searchVisibility: boolean
  searchPosition: boolean
}

export const Container = styled.div<Props>`
  height: 80px;
  border-bottom: 1px solid var(--color-light);

  .main-wrapper {
    display: grid;
    grid-template-columns: ${props =>
      props.loggedIn ? '1fr auto auto auto' : '1fr auto auto'};
    gap: 10px;
    align-items: center;
  }

  .mobile-button {
    width: 43px;
    height: 43px;
    background-color: #232e43;
    border: none;
    border-radius: 30px;
    cursor: pointer;

    .fa {
      font-size: 16px;
      color: var(--color-regular);
      margin-top: 2px;
    }

    .fa-times {
      margin-top: 3px;
      font-size: 19px;
    }

    &:hover .fa {
      color: #ffffff;
    }
  }

  .search-container {
    display: none;
  }

  .navigation-container {
    display: none;
  }

  .connect-wallet {
    display: none;
  }

  .avatar-container {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    .avatar > img {
      width: 43px;
      height: 43px;
      border-radius: 30px;
      vertical-align: bottom;
    }

    &:hover {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 360px) {
    .logo-container > a {
      .logo {
        width: 28px;
        height: 28px;
        font-size: 46px;
      }

      > h1 {
        font-size: 24px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .main-wrapper {
      grid-template-columns: 125px 43px 1fr auto;
      gap: 25px;
    }

    .search-container {
      display: initial;
      width: ${props => (props.searchVisibility ? '100%' : '0px')};
      position: ${props => (props.searchPosition ? 'initial' : 'absolute')};
      transition: width 0.25s;
      overflow: hidden;
    }

    .navigation-button {
      display: none;
    }

    .navigation-container {
      display: ${props => (props.navigationVisibility ? 'initial' : 'none')};
      margin: 0 auto;

      > ul {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;

        > li {
          list-style: none;

          > a {
            padding: 32px 29px 31px;
            border-right: 1px solid var(--color-light);
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.3px;
            color: var(--color-regular);

            &:hover {
              color: #ffffff;
            }
          }

          &:last-child > a {
            border-right: none;
          }
        }
      }
    }

    .connect-wallet {
      display: flex;
      align-items: center;
      padding: 10px 22px 9px;
      background-color: var(--color-primary);
      border: none;
      border-radius: 30px;
      cursor: pointer;

      > .fa {
        font-size: 16px;
        color: #ffffff;
        margin-right: 10px;
      }

      > span {
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.3px;
        color: #ffffff;
      }

      &:hover {
        opacity: 0.95;
      }
    }

    .avatar-container .avatar {
      padding: 4px;
      background-color: var(--color-light);
      border-radius: 30px;

      > img {
        width: 45px;
        height: 45px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    .main-wrapper {
      grid-template-columns: auto 1fr auto auto;
    }

    .search-button {
      display: none;
    }

    .search-container {
      width: 100%;
      display: initial;
      position: initial;
    }

    .navigation-container {
      margin: 0 auto;

      > ul > li > a {
        padding: 32px 32px 31px;
      }
    }
  }
`
