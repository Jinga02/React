import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/Login" />
      <Route path="/Login" component={Login}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
    </Switch>
  );
};

export default App;
