import React from 'react';
import UserDetail from './user_detail';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    if (typeof this.props.currentUser === 'undefined') {
      return null;
    } else {
      return(
        <ul className="user-feed">
          {this.props.users.map((user, i) => (
            <div key={`user-${i}`} className="user-container">
              <img className="mini-avatar" src={user.avatar} />
              <li key={`post-${i}`} className="user-detail">
                <UserDetail user={user}
                  currentUser={this.props.currentUser}
                  unfollowUser={this.props.unfollowUser}
                  followUser={this.props.followUser}
                  currentUser={this.props.currentUser}
                />
            </li>
            </div>
          ))}
        </ul>
      );
    }
  }

}

export default UserIndex;
