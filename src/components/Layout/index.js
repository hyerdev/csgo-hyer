import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';

const Layout = ({ children, headerPosition }) => {
  return (
    <Wrapper>
      <Header headerPosition={headerPosition} />
      <main>{children}</main>
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
