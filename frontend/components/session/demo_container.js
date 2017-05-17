import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Demo from './demo';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});


const DemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);

export default DemoContainer;
