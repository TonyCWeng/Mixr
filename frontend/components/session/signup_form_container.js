import { connect } from 'react-redux';
import { logout, signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});


const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
