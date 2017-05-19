import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import TextForm from './text_form.jsx';

const mapStateToProps = ({posts, session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);
