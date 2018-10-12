import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Header from './header/header.jsx';
import DashBoard from './dash_board/dash_board.jsx';
import SplashPage from './splashpage';
import PostBar from './post_forms/post_bar';
import DashBoardContainer from './dash_board/dash_board_container';

const App = () => (
  <div>
    <Header />

    <ProtectedRoute path='/dashboard' component={DashBoardContainer} />
    <AuthRoute exact path='/' component={SplashPage} />

  </div>
);

export default App;
