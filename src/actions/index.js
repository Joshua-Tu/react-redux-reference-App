import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,

  // user promise
  LOAD_USER
} from "../constants";
import axios from "axios";

export const increment = () => {
  // return dispatch => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: INCREMENT
  //     });
  //   }, 2000);
  // };

  return { type: INCREMENT };

  // return {
  //   type: INCREMENT,
  //   payload: new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("rails365");
  //     });
  //   })
  // };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const get_user = () => {
  // return dispatch => {
  //   dispatch(fetch_user_request());
  //   axios
  //     .get("https://randomuser.me/api")
  //     .then(res => {
  //       dispatch(fetch_user(res.data.results[0]));
  //     })
  //     .catch(error => {
  //       dispatch(fetch_user_failure(error.response.data));
  //     });
  // };

  return {
    type: LOAD_USER,
    payload: axios.get("https://randomuser.me/api")
  };
};

export const fetch_user_request = id => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetch_user = user => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  };
};

export const fetch_user_failure = error => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
};
