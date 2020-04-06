import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Binds from './pages/Binds';
import BindsCFG from './pages/BindsCFG';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/binds" component={Binds} />
        <Route path="/binds-cfg" component={BindsCFG} />
      </Switch>
    </BrowserRouter>
  );
}
