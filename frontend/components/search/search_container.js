import { connect } from 'react-redux';
import Search from './search.jsx';
import * as ACTIONS from '../../actions/search_actions.js';

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(ACTIONS.fetchSearchResults(query))
})

export default connect(null, mapDispatchToProps)(Search);
