import React from 'react';

import TextForm from './text_form';
import PhotoForm from './photo_form';
import QuoteForm from './quote_form';
import LinkForm from './link_form';
import ChatForm from './chat_form';
import AudioForm from './audio_form';
import VideoForm from './video_form';

const PostBar = () => (
  <div className="bar-container">
    <div className="forms">
      <TextForm />
      <PhotoForm />
      <QuoteForm />
      <LinkForm />
      <ChatForm />
      <AudioForm />
      <VideoForm />
    </div>
  </div>
);

export default PostBar;
