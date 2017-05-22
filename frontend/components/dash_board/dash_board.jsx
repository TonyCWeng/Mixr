import React from 'react';
import FeedContainer from '../feed/feed_container';
import PostBar from '../post_forms/post_bar';

const DashBoard = () => (
  <div className="left">
    <PostBar />
    <FeedContainer />
  </div>
);

export default DashBoard;
