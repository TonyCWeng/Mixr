import React from 'react';

import FeedContainer from './feed/feed_container';
import Header from './header/header.jsx';

import PostBar from './post_forms/post_bar';

const App = () => (
  <div>
    <Header />
    <PostBar />
    <FeedContainer />
  </div>
);

export default App;
