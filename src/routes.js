import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IndexPage from './pages/IndexPage';
import BindsPage from './pages/BindsPage';
import BindsCFGPage from './pages/BindsCFGPage';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/binds" component={BindsPage} />
        <Route path="/binds-cfg" component={BindsCFGPage} />
      </Switch>
    </BrowserRouter>
  );
}
