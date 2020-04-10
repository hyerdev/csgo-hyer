import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Binds from './pages/Binds';
import CreateCfg from './pages/CreateCfg';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-cfg" component={CreateCfg} />
        <Route path="/binds" component={Binds} />
      </Switch>
    </BrowserRouter>
  );
}
