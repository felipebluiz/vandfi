import styled from 'styled-components'

interface ContainerProps {
  loggedIn: boolean
  navigationVisibility: boolean
  searchVisibility: boolean
  searchPosition: boolean
  searchContainerPadding: boolean
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  background: var(--color-darker);
  border-bottom: 1px solid var(--color-light);

  .main-wrapper {
    display: grid;
    grid-template-columns: ${props =>
      props.loggedIn ? '1fr auto auto auto' : '1fr auto auto'};
    gap: 10px;
    align-items: center;
  }

  .search-button {
    display: none;
  }

  .mobile-button,
  .search-button {
    width: 44px;
    min-width: 44px;
    height: 44px;
    background-color: #232e43;
    border: none;
    border-radius: 30px;
    cursor: pointer;

    .fa {
      font-size: 16px;
      color: var(--color-regular);
    }

    .fa-bars {
      font-size: 17px;
    }

    .fa-times {
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
      width: 44px;
      height: 44px;
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

    .search-button {
      display: flex;
    }

    .search-container {
      display: initial;
      position: ${props => (props.searchPosition ? 'relative' : 'absolute')};

      > form {
        width: ${props => (props.searchVisibility ? '100%' : '0px')};
        padding: ${props => (props.searchContainerPadding ? '4px' : '0')};
        margin: ${props => (props.searchContainerPadding ? '0' : '4px')};
        transition: width 0.25s;
        overflow: hidden;
      }

      .search-results-container {
        padding: 6px 6px 6px 0;
        width: 100%;
        position: absolute;
        top: 85px;
        left: 0;
        background-color: var(--color-darker);
        border: 1px solid var(--color-light);
        border-radius: 10px;

        .search-results {
          min-height: 20px;
          max-height: calc(100vh - 185px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--color-light) var(--color-darker);

          ::-webkit-scrollbar {
            width: 5px;
          }

          ::-webkit-scrollbar-thumb {
            background: var(--color-light);
            border-radius: 5px;
          }
        }
      }
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
      position: relative;
      overflow: initial;

      > form {
        width: initial;
        padding: 4px;
      }
    }

    .navigation-container {
      margin: 0 auto;

      > ul > li > a {
        padding: 32px 32px 31px;
      }
    }
  }
`
