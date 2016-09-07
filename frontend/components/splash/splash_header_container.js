import {connect} from 'react-redux';
import SplashHeader from './splash_header.jsx';
import { clearSessionErrors } from '../../actions/form_actions.js';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashHeader);
