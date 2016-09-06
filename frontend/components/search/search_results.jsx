import React from 'react';
import TrackSearchItemContainer from './track_search_item_container';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  closeSearch(e){
    console.log(e);
    this.props.closeSearch();
  }

  getResults(){
    let results = this.props.results;
    if(results.tracks.length > 0 || results.playlists.length > 0){
      return (
        <div>
          {this.getTracks()}
          {this.getPlaylists()}
        </div>
      );
    } else {
      return (
        <div className='empty-results'>
          No tracks or playlists found
        </div>
      );
    }
  }

  getTracks(){
    let results = this.props.results;
    if(results.tracks.length > 0){
      let tracks = results.tracks.map((track, idx) =>{
        return (
          <TrackSearchItemContainer
            track={track}
            closeSearch={this.closeSearch.bind(this)}
            key={`${idx}${track.title}`}/>
        );
      });

      return (
        <div>
          <span className='search-header'>TRACKS</span>
          <ul>
            {tracks}
          </ul>
        </div>
      );
    }
  }

  getPlaylists(){
    let results = this.props.results;
    if(results.playlists.length > 0){
      let playlists = results.playlists.map((playlist, idx) =>{
        return (
          <Link to={`/playlist/${playlist.id}`}
                onClick={this.closeSearch.bind(this)}
                key={`${idx}${playlist.title}`}
                className='playlist-search-item search-item'>
            <li >
              <span className='search-playlist-name'>{playlist.title}</span>
            </li>
          </Link>
        );
      });

      return (
        <div>
          <span className='search-header'>PLAYLISTS</span>
          <ul>
            {playlists}
          </ul>
        </div>
      )
    }
  }


  render(){
    return(
      <section className='search-results'>
        {this.getResults()}
      </section>
    );
  }
}

export default SearchResults;
