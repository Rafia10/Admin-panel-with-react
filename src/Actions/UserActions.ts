// actions.js

export const fetchListRequest = () => ({
  type: "FETCH_LIST_REQUEST",
});

export const fetchListSuccess = (data) => ({
  type: "FETCH_LIST_SUCCESS",
  payload: data,
});

export const fetchListFailure = (error) => ({
  type: "FETCH_LIST_FAILURE",
  payload: error,
});
