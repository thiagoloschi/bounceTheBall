import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Playground from 'containers/Playground/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/play" component={Playground} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
