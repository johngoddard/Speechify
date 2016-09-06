export const SearchConstants = {
  FETCH_SEARCH_RESULTS: 'FETCH_SEARCH_RESULTS',
  RECEIVE_SEARCH_RESULTS: "RECEIVE_SEARCH_RESULTS",
  CLEAR_SEARCH_RESULTS: "CLEAR_SEARCH_RESULTS"
};

export const fetchSearchResults = query => ({
  type: SearchConstants.FETCH_SEARCH_RESULTS,
  query
});

export const receiveSearchResults = results => ({
  type: SearchConstants.RECEIVE_SEARCH_RESULTS,
  results
});

export const clearSearchResults = () => ({
  type: SearchConstants.CLEAR_SEARCH_RESULTS
});
