import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '~/components/Layout';

import { Container, Wrapper } from './styles';

function IndexPage() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <h1>
            Crie agora <br />a sua <span>.cfg</span>
          </h1>
          <p>
            Facilite sua vida no jogo, com as binds de compra você terá o que
            precisa em <i>segundos</i>.
          </p>
          <Link to="/create-cfg">Criar agora</Link>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default IndexPage;
