import React from 'react';

import Layout from '~/components/Layout';

import { Container, Wrapper } from './styles';

function IndexPage() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <h1>Hello Index</h1>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default IndexPage;
