import { connect } from 'react-redux';
import MainPage from './mainpage';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const MainPageContainer = connect(
  mapStateToProps,
  null
)(MainPage);

export default MainPageContainer;
