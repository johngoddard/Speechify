import { connect } from 'react-redux';
import Header from './header.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  openModal: ownProps.openModal,
  openDemoModal: ownProps.openDemoModal
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
