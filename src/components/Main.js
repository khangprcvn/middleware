import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resource from './Resource';
import requireAuth from './require_authentication';
const main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/resource" component={requireAuth(Resource)} />
      </Switch>
    </main>
  )
}
export default main;