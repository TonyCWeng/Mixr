import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
  }

  toggleFollow() {
    if (this.props.currentUser.followings.includes(this.props.user.id)) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  followButton() {
    if ( this.props.currentUser && this.props.currentUser.followings.includes(this.props.user.id)) {
      return (
        <div className="follow-container">
          <div onClick={this.toggleFollow} className="following">
            <img className="follow-status" src={"https://s3-us-west-1.amazonaws.com/mixr-dev/1495795568_099338-netvibes2-logo-square.png"} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="follow-container">
          <div onClick={this.toggleFollow} className="not-following">
            <img className="follow-status" src={"https://s3-us-west-1.amazonaws.com/mixr-dev/photos/add+follow.png"} />
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="user-feed-item">
        <div className="detail-container">
          <img className="mini-avatar" src={this.props.user.avatar} />
          <div className="detail-username">{this.props.user.username}</div>
        </div>
        <div className="follow-icon-container">
          {this.followButton()}
        </div>
      </div>
    );
  }

}

export default UserDetail;
