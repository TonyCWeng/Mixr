import React from 'react';
import { AuthRoute, ProtectedRoute, Switch } from '../util/route_util';
import Header from './header/header.jsx';
import DashBoard from './dash_board/dash_board.jsx';
import SplashPage from './splashpage';
import PostBar from './post_forms/post_bar';

const App = () => (
  <div>
    <Header />
      <Switch>
        <AuthRoute path='/' component={SplashPage} />
        <ProtectedRoute path='/dashboard' component={DashBoard} />
      </Switch>
  </div>
);

export default App;
