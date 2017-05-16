import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session, errors }) => ({
  currentUser: session.currentUser,
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});


const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
