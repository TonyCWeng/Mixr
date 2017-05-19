import React from 'react';

import FeedContainer from './feed/feed_container';
import TextForm from './post_forms/text_form';
import Header from './header/header.jsx';
import QuoteForm from './post_forms/quote_form';
import LinkForm from './post_forms/link_form';

const App = () => (
  <div>
    <TextForm />
    <QuoteForm />
    <LinkForm />
    <Header />
    <FeedContainer />
  </div>
);

export default App;
