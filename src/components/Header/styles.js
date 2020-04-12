import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  padding: 20px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 100px;
  }

  button {
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
    padding: 0px;
  }

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    font-weight: bold;

    li + li {
      margin-left: 20px;
    }

    li {
      &:hover {
        color: #c83232;
        cursor: pointer;
      }

      & + li {
        margin-left: 20px;
      }
    }
  }

  @media (max-width: 1250px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const MenuDesktop = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }

  button {
    display: flex;

    svg {
      margin: 0px;
      margin-left: 15px;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        color: #c83232;
      }
    }
  }

  div {
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background-color: #000000;
    color: white;
    overflow-x: hidden;
    transition: opacity 0.5s linear 1s;

    opacity: ${(props) => (props.open ? '1' : '0')};
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    padding: 20px;

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0px;
      font-size: 28px;
      text-align: right;
      color: white;

      li {
        img {
          margin-bottom: 20px;
        }

        a {
          text-decoration: none;
          color: white;
          &:hover {
            color: #bc1c20;
          }
        }
      }

      li + li {
        margin-top: 13px;
      }
    }
  }
`;
