import { connect } from 'react-redux';
import DashBoard from './dash_board';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps, null)(DashBoard);
