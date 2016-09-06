import React from 'react';
import SearchResultsContainer from './search_results_container.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.updateQuery = this.updateQuery.bind(this);
  }

  closeSearch(e){
    this.setState({query: ''});
  }

  updateQuery(e){
    this.setState({query: e.target.value});
    if(e.target.value.length > 0){
      this.props.search({query: e.target.value});
    }
  }

  render(){
    return (
      <section className='search-cont' >
        <input type='text'
               value={this.state.query}
               onChange={this.updateQuery.bind(this)}
               placeholder='Search for tracks and playlists'
               />
             {this.state.query.length > 0 ?
              <SearchResultsContainer closeSearch={this.closeSearch.bind(this)}/> : ''}
      </section>
    );
  }
}

export default Search;