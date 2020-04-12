import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdMenu, MdClose } from 'react-icons/md';
import { Container, Wrapper, MenuDesktop, MenuMobile } from './styles';
import logo from '~/assets/images/logo.svg';

function Header({ position }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container position={position}>
      <Wrapper position={position}>
        <Link to="/">
          <img src={logo} alt="CSGOHyer" />
        </Link>
        <MenuDesktop>
          <ul>
            <li>Gerador de CFG</li>
            <li>CFG de Pros</li>
            <li>Otimização do jogo</li>
            <li>Dicas</li>
          </ul>
        </MenuDesktop>
        <MenuMobile open={menuOpen}>
          <button type="button" onClick={() => setMenuOpen(true)}>
            <MdMenu size={30} />
          </button>

          <div>
            <button type="button" onClick={() => setMenuOpen(false)}>
              <MdClose size={30} />
            </button>
            <ul>
              <li>Gerador de CFG</li>
              <li>CFG de Pros</li>
              <li>Otimização do jogo</li>
              <li>Dicas</li>
            </ul>
          </div>
        </MenuMobile>
      </Wrapper>
    </Container>
  );
}

Header.propTypes = {
  position: PropTypes.string.isRequired,
};

export default Header;
