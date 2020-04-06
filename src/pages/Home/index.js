import React from 'react';

import Layout from '~/components/Layout';
import bgImage from '~/images/index/bg_pc.jpg';

import { Container, Wrapper } from './styles';

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

export default IndexPage;
