export const LoadingConstants = {
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING",
  START_SEARCH_LOADING: "START_SEARCH_LOADING",
  STOP_SEARCH_LOADING: "STOP_SEARCH_LOADING"
};

export const startLoading = () => ({
  type: LoadingConstants.START_LOADING
});

export const stopLoading = () => ({
  type: LoadingConstants.STOP_LOADING
});

export const startSearchLoading = () => ({
  type: LoadingConstants.START_SEARCH_LOADING
});

export const stopSearchLoading = () => ({
  type: LoadingConstants.STOP_SEARCH_LOADING
});
