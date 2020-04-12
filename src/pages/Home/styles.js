import styled from 'styled-components';

import bgImage from '~/assets/images/index/bg_pc.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;

  background-image: url(${bgImage});
  background-position: 200px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 900px) {
    background-position: 0px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    font-size: 60px;

    span {
      color: #e35a01;
    }
  }

  p {
    font-size: 28px;
    max-width: 320px;
    color: #e6e6e6;

    i {
      font-weight: bold;
    }
  }

  a {
    display: block;
    background: #c83232;
    width: fit-content;

    margin-top: 20px;
    padding: 10px 20px;

    border-radius: 3px;

    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    padding-right: 20px;
    padding-left: 20px;
  }

`;
