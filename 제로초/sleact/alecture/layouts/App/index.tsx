import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Workspace from '@layouts/Workspace';

// 경로가 일정한 애들은 layout에 따로
const Login = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
// const Channel = loadable(() => import('@pages/Channel'));
// const DirectMessage = loadable(() => import('@pages/DirectMessage'));
const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/Login" />
      <Route path="/Login" component={Login}></Route>
      <Route path="/SignUp" component={SignUp}></Route>
      <Route path="/workspace/:workspace" component={Workspace}></Route>
      {/* <Route path="/workspace/Channel" component={Channel}></Route>
      <Route path="/workspace/dm" component={DirectMessage}></Route> */}
    </Switch>
  );
};

export default App;
