import React from 'react';

import TextForm from './text_form';
import PhotoForm from './photo_form';
import QuoteForm from './quote_form';
import LinkForm from './link_form';
import ChatForm from './chat_form';
import AudioForm from './audio_form';
import VideoForm from './video_form';

class PostBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="bar-container">
        <img className="avatar" src={this.props.currentUser.avatar_url} />
        <div className="post-forms">
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
  }
}


export default PostBar;
