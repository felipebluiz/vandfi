import styled from 'styled-components'

export const Container = styled.div`
  > form {
    padding: 4px;

    > label {
      position: relative;

      .fa-search {
        position: absolute;
        top: 2px;
        left: 15px;
        color: var(--color-regular);
      }

      > button {
        position: absolute;
        top: 1px;
        right: 15px;
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
        padding: 13px 42px 12px;
        color: #ffffff;
        background-color: #232e43;
        border: 1px solid #232e43;
        border-radius: 30px;
        outline: none;

        &:focus {
          border: 1px solid #334154;
          background-color: var(--color-dark);
          box-shadow: rgb(255 255 255 / 6%) 0px 0px 0px 3px;
        }
      }
    }
  }

  .search-results {
    .section-title {
      padding-left: 20px;

      &:first-child {
        padding-top: 12px;
      }

      > span {
        font-size: 14px;
        font-weight: 500;
      }
    }

    .section-list {
      padding: 10px 20px;
      display: flex;
      flex-direction: column;

      .list-item {
        display: flex;
        align-items: center;
        gap: 20px;
        background: none;
        border: none;
        text-align: left;

        &:last-child {
          border-bottom: none;
        }

        .item-image,
        .collection-avatar,
        .creator-avatar {
          width: 40px;
          height: 40px;
          border-radius: 40px;
        }

        .item-image {
          border-radius: 6px;
        }

        .info-container {
          display: grid;
          gap: 3px;
          width: 100%;
          padding-top: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-light);

          .name {
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0.3px;
            color: #ffffff;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .description {
            font-size: 12px;
            font-weight: 400;
            color: var(--color-regular);
          }
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }

    .button-container {
      padding: 15px 20px 20px;

      > button {
        width: 100%;
      }
    }
  }

  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 75px);
    padding: 20px;
    text-align: center;

    h2 {
      font-size: 18px;
      line-height: 20px;
      color: #ffffff;
    }

    p {
      margin-top: 5px;
    }

    button {
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (max-width: 1023px) {
    .search-results-container {
      height: calc(100vh - 75px);
    }
  }

  @media screen and (min-width: 1024px) {
    .not-found {
      height: 250px;
    }
  }
`
