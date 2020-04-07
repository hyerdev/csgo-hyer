import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
