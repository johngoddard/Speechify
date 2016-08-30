export const FormConstants = {
  RECEIVE_SESSION_ERRORS: "RECEIVE_SESSION_ERRORS",
  CLEAR_SESSION_ERRORS: "CLEAR_SESSION_ERRORS"
};

export const receiveSessionErrors = errors => ({
  type: FormConstants.RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: FormConstants.CLEAR_SESSION_ERRORS
});
