import { connect } from 'react-redux';
import Search from './search.jsx';
import * as ACTIONS from '../../actions/search_actions.js';

const mapStateToProps = state => ({
  loading: state.loading.searchLoading
});

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(ACTIONS.fetchSearchResults(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
