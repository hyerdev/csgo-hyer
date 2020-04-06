import React from 'react';

import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
