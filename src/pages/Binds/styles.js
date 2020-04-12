import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 150px;
  background-color: #273366;
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 720px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  h1 {
    font-size: 60px;
    margin-bottom: 5px;
  }

  p {
    font-size: 34px;
    max-width: 320px;
    color: #e6e6e6;
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
  }
`;

export const CFGPreview = styled.div``;
export const Tutorial = styled.div`
  text-align: right;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 100%;
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
`;
