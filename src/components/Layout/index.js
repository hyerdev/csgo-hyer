import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Main } from './styles';
import Header from '~/components/Header';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
