/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '~/components/Layout';

import {
  Container,
  Wrapper,
  CFGPreview,
  Tutorial,
  BindsPanel,
  CallToAction,
} from './styles';

import img1 from '~/assets/images/binds/img1.svg';

function BindsPage() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <CFGPreview>
            <h1>Pronto! Bora jogar!</h1>
            <p>Aqui está a sua .cfg:</p>

            <BindsPanel>
              <textarea name="binds" rows="20" cols="50">
                bind x "buy m4a4;"
              </textarea>
            </BindsPanel>
          </CFGPreview>
          <Tutorial>
            <CallToAction>
              <h2>Dúvidas de como ativar no jogo?</h2>
              <p>
                Montamos um <br />
                passo a passo para te ajudar
              </p>
              <Link to="/cfg-installation-tutorial">Tutorial</Link>
            </CallToAction>

            <img src={img1} alt="CSGO HYER" />
          </Tutorial>
        </Wrapper>
      </Container>
    </Layout>
  );
}

export default BindsPage;
