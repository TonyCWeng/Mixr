import { connect } from 'react-redux';
import Feed from './feed';
import { selectAllPosts } from '../../reducers/selectors';
import {
  requestSinglePost,
  requestAllPosts,
  updatePost,
  deletePost,
  likePost,
  dislikePost
}
from '../../actions/post_actions';

const mapStateToProps = ({posts, session}) => ({
  posts: selectAllPosts(posts),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllPosts: () => dispatch(requestAllPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: id => dispatch(deletePost(id)),
  likePost: (id) => dispatch(likePost(id)),
  dislikePost: (id) => dispatch(dislikePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
