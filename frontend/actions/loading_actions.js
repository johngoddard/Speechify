export const LoadingConstants = {
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};

export const startLoading = () => ({
  type: LoadingConstants.START_LOADING
});

export const stopLoading = () => ({
  type: LoadingConstants.STOP_LOADING
});
