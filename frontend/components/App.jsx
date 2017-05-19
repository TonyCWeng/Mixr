import React from 'react';

import FeedContainer from './feed/feed_container';
import TextForm from './post_forms/text_form';
import Header from './header/header.jsx';
import QuoteForm from './post_forms/quote_form';
import LinkForm from './post_forms/link_form';
import PhotoForm from './post_forms/photo_form';
import VideoForm from './post_forms/video_form';
import AudioForm from './post_forms/audio_form';

const App = () => (
  <div>
    <AudioForm />
    <QuoteForm />
    <VideoForm />
    <LinkForm />
    <PhotoForm />
    <Header />
    <FeedContainer />
  </div>
);

export default App;
