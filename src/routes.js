import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  Login,
} from './pages';

const Rotas = () => (
  <Switch>
    <Route exact path="/login" component={ Login } />
    <Route exact path="/" component={ () => <Redirect to="/login" /> } />
  </Switch>
);

export default Rotas;
