import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import ClienteDetails from '~/pages/ClienteDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cliente/:id" component={ClienteDetails} />
    </Switch>
  );
}
