import React from 'react';

import FeedContainer from './feed/feed_container';
import TextFormContainer from './post_forms/post_form_container';
import Header from './header/header.jsx';


const App = () => (
  <div>
    <TextFormContainer />
    <Header />
    <FeedContainer />
  </div>
);

export default App;
