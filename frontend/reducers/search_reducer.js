import { SearchConstants } from '../actions/search_actions.js';
import * as ACTIONS from '../actions/search_actions.js';
import { merge } from 'lodash';

const _default = {
  tracks: [],
  playlists: []
};


const SearchReducer = (state = _default, action) => {
  switch (action.type) {
    case SearchConstants.RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, {tracks: action.results.tracks, playlists: action.results.playlists});
    case SearchConstants.CLEAR_SEARCH_RESULTS:
      return _default;
    default:
      return state;
  }
};

export default SearchReducer;
