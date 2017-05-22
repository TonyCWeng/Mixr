import React from 'react';
import { AuthRoute, ProtectedRoute, Switch } from '../util/route_util';
import Header from './header/header.jsx';

import SplashPage from './splashpage';
import PostBar from './post_forms/post_bar';

const App = () => (
  <div>
    <Header />
    <SplashPage />
  </div>
);

export default App;

// <Switch>
//   <AuthRoute path='/' component={SplashPage} />
//   <ProtectedRoute path='/dashboard' component={DashBoard} />
// </Switch>
