import React from 'react';

import './fonts.css';
import './layout.css';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: #000000;
  color: white;
  min-height: 100vh;

  font-size: 16px;
`;

export default Layout;
