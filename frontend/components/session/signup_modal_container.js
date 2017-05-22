import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SignupModal from './Signup_modal';
import { clearErrors } from '../../actions/error_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});


const SignupModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModal);

export default SignupModalContainer;
