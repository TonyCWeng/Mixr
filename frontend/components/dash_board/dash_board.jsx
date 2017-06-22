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

              <div className="links">
                <div>
                  <a href="https://github.com/tonycweng/Mixr/">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </a>
                </div>

                <div>
                  <a href="https://www.linkedin.com/in/tony-weng">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
    );
  }
}

export default DashBoard;
