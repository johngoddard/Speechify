import {connect} from 'react-redux';
import App from './app.jsx';
import {clearSessionErrors} from "../../actions/form_actions.js";

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(null, mapDispatchToProps)(App);
