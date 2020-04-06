import React from 'react';

import styled from 'styled-components';
import Layout from '../components/layout';

import bgImage from '../images/index/bg_pc.jpg';

const IndexPage = () => {
  return (
    <Layout>
      <Container style={{ backgroundImage: `url(${bgImage})` }}>
        <Wrapper>
          <h1>Hello Index</h1>
        </Wrapper>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(bgImage);
  background-position: 200px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default IndexPage;
