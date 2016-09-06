import SearchResults from './search_results.jsx';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  results: state.search
});

export default connect(mapStateToProps)(SearchResults);
