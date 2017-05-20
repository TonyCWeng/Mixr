import { connect } from 'react-redux';
import { createPost, createMediaPost } from '../../actions/post_actions';

const mapStateToProps = ({posts, session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  createMediaPost: post => dispatch(createMediaPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps);
