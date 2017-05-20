import React from 'react';

import TextForm from './text_form';
import PhotoForm from './photo_form';
import QuoteForm from './quote_form';
import LinkForm from './link_form';
import ChatForm from './chat_form';
import AudioForm from './audio_form';
import VideoForm from './video_form';

const PostBar = () => (
  <div className="forms">
    <TextForm />
    <PhotoForm />
    <QuoteForm />
    <LinkForm />
    <VideoForm />
    <LinkForm />
    <AudioForm />
  </div>
);

export default PostBar;
