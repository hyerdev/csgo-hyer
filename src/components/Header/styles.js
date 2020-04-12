import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) =>
    props.position === 'relative' ? '#1c2340' : 'none'};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: ${(props) => props.position};
  left: 0;
  right: 0;
  padding: ${(props) =>
    props.position === 'relative' ? '10px 0px 2px 0px' : '20px 0px'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    max-width: 100px;
    height: ${(props) => (props.position === 'relative' ? '80px' : 'auto')};
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
  ul {
    margin-bottom: 0px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: none;
  height: 100%;

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
    margin-bottom: 200px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    position: fixed;
    z-index: 3;
    left: 0;
    top: 0;
    background-color: #000000;
    color: white;
    transition: opacity 0.5s linear 1s;
    padding: 40px 20px 20px 20px;

    opacity: ${(props) => (props.open ? '1' : '0')};
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

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
      padding-bottom: 10%;
    }
  }
`;
