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
          <div onClick={this.toggleFollow} className="following">❤</div>
        </div>
      );
    } else {
      return (
        <div className="follow-container">
          <div onClick={this.toggleFollow} className="not-following">❤</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="detail-container">
        <div className="detail-username">{this.props.user.username}</div>
        <div className="follow-icon">
          {this.followButton()}
        </div>
      </div>
    );
  }

}

export default UserDetail;
