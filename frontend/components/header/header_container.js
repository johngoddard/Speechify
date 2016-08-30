import { connect } from 'react-redux';
import Header from './header.jsx';
import { logout } from '../../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  openLoginModal: ownProps.openLoginModal,
  openSignupModal: ownProps.openSignupModal
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
