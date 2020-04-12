import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import darkTheme from './styles/themes/dark';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
