import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 800px;
  height: 100%;
  padding-top: 30px;
  background-color: #273366;

  @media (max-width: 900px) {
    height: fit-content;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  h1 {
    font-size: 49px;
    margin-bottom: 5px;
  }

  p {
    font-size: 34px;
    max-width: 320px;
    color: #e6e6e6;
  }

  @media (max-width: 1250px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 33px;
    }
    p {
      font-size: 21px;
    }
  }
`;

export const BindsPanel = styled.div`
  margin-top: 10px;

  textarea {
    background-color: #44549c;
    border: none;
    color: #e6e6e6;
    outline: none;
    resize: none;
    width: 430px;
    height: 500px;
  }

  @media (max-width: 900px) {
    textarea {
      width: 100%;
    }
  }
`;

export const CFGPreview = styled.div`
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Tutorial = styled.div`
  text-align: right;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 95%;
    position: sticky;
    bottom: 0px;
    right: 0px;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: fit-content;

    text-align: left;
    align-items: flex-start;

    img {
      max-width: 500px;
      position: initial;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 100%;
    }
  }
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  h2 {
    margin-bottom: 5px;
  }
  p {
    max-width: none;
    font-size: 18px;
    margin-bottom: 15px;
  }

  a {
    display: block;
    background: #c83232;
    width: fit-content;

    padding: 10px 20px;

    border-radius: 3px;

    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    padding-top: 30px;
    align-items: flex-start;
  }
`;
