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

  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    font-weight: bold;

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
`;
