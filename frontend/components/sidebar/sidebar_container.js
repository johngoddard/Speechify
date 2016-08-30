import { connect } from 'react-redux';
import Sidebar from './sidebar.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  openDemoModal: ownProps.openDemoModal
});


export default connect(mapStateToProps)(Sidebar);
