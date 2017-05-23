import React from 'react';
import FeedContainer from '../feed/feed_container';
import PostBar from '../post_forms/post_bar';



class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="left">
          <PostBar currentUser={this.props.currentUser}/>
          <FeedContainer />
        </div>
      </div>
    );
  }
}

export default DashBoard;
