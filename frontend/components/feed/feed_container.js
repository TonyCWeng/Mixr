import { connect } from 'react-redux';
import Feed from './feed';
import { selectAllPosts } from '../../reducers/selectors';
import {
  requestSinglePost,
  requestAllPosts,
  deletePost
}
from '../../actions/post_actions';

const mapStateToProps = ({posts, session}) => ({
  posts: selectAllPosts(posts),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllPosts: () => dispatch(requestAllPosts()),
  deletePost: id => dispatch(deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
