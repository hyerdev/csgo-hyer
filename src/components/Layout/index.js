import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Main } from './styles';
import Header from '~/components/Header';

const Layout = ({ children, headerPosition }) => {
  return (
    <Wrapper>
      <Header position={headerPosition} />
      <Main>{children}</Main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerPosition: PropTypes.string,
};

Layout.defaultProps = {
  headerPosition: 'relative',
};

export default Layout;
