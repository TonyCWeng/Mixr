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
        <div className="user-feed">
          <span className="recommendation">Recommended Blogs</span>
          {this.props.users.map((user, i) => (
            <UserDetail user={user}
              key={`user-detail-${i}`}
              currentUser={this.props.currentUser}
              unfollowUser={this.props.unfollowUser}
              followUser={this.props.followUser}
              currentUser={this.props.currentUser}
            />
          ))}
        </div>
      );
    }
  }

}

export default UserIndex;
