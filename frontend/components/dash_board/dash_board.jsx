import React from 'react';
import FeedContainer from '../feed/feed_container';
import PostBar from '../post_forms/post_bar';
import UserIndexContainer from '../user_index/user_index_container';


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="main-content">
          <div className="left">
            <PostBar currentUser={this.props.currentUser}/>
            <FeedContainer />
          </div>

          <div className="right">
            <UserIndexContainer />
          </div>

        </div>
      </div>
    );
  }
}

export default DashBoard;
