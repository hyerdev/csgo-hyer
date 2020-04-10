import React, { useState } from 'react';

import { MdMenu, MdClose } from 'react-icons/md';
import { Container, Wrapper } from './styles';
import logo from '~/assets/images/logo.svg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="CSGOHyer" />
        <ul className="desktop-menu">
          <li>Gerador de CFG</li>
          <li>CFG de Pros</li>
          <li>Otimização do jogo</li>
          <li>Dicas</li>
        </ul>
        <div className="mobile">
          <button
            type="button"
            className="menu-mobile-button__open"
            onClick={() => setMenuOpen(true)}
          >
            <MdMenu size={30} />
          </button>

          <div
            className="menu-mobile"
            style={{
              display: menuOpen ? 'flex' : 'none',
              opacity: menuOpen ? '1' : '0',
            }}
          >
            <button
              className="menu-mobile-button__close"
              type="button"
              onClick={() => setMenuOpen(false)}
            >
              <MdClose size={30} />
            </button>
            <ul>
              <li>Gerador de CFG</li>
              <li>CFG de Pros</li>
              <li>Otimização do jogo</li>
              <li>Dicas</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}
