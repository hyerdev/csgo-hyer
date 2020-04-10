import React from 'react';

import logo from '~/assets/images/logo.svg';
import { Container, Wrapper } from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="CSGOHyer" />

        <ul>
          <li>Gerador de CFG</li>
          <li>CFG de Pros</li>
          <li>Otimização do jogo</li>
          <li>Dicas</li>
        </ul>
      </Wrapper>
    </Container>
  );
}
