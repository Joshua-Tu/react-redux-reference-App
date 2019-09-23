import {
  // FETCH_USER_SUCCESS,
  // FETCH_USER_REQUEST,
  // FETCH_USER_FAILURE,

  // user promise
  LOAD_USER_FULFILLED,
  LOAD_USER_REJECTED,
  LOAD_USER_PENDING
} from "../constants";

// const initialState = {
//   isFetching: false,
//   error: null,
//   user: {}
// };

export const user = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_USER_FULFILLED:
      // console.dir(action.payload);
      return {
        isFetching: false,
        error: null,
        user: action.payload.data.results[0]
      };

    case LOAD_USER_PENDING:
      return {
        isFetching: true,
        error: null,
        user: {}
      };

    case LOAD_USER_REJECTED:
      // console.dir(action.payload);
      return {
        isFetching: false,
        error: action.payload.response.data,
        user: {}
      };

    default:
      return state;
  }
};
