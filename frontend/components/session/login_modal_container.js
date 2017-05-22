import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LoginModal from './login_modal';

import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});


const LoginModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);

export default LoginModalContainer;
