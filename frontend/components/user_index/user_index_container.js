import { connect } from 'react-redux';
import UserIndex from './user_index';
import { unfollowUser, followUser } from '../../actions/session_actions';
import { requestAllUsers } from '../../actions/user_actions';

const mapStateToProps = ({session, users}) => ({
  currentUser: session.currentUser,
  users
});

const mapDispatchToProps = dispatch => ({
  requestAllUsers: (users) => dispatch(requestAllUsers(users)),
  unfollowUser: id => dispatch(unfollowUser(id)),
  followUser: id => dispatch(followUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
