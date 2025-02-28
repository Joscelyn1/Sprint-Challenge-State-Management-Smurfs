import axios from "axios";

export const FETCH_SMURF_DATA_START = "FETCH_SMURF_DATA_START";
export const FETCH_SMURF_DATA_SUCCESS = "FETCH_SMURF_DATA_SUCCESS";
export const FETCH_SMURF_DATA_FAILURE = "FETCH_SMURF_DATA_FAILURE";
export const ADD_SMURF = "ADD_SMURF";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_DATA_START });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        // res.data.data
        console.log(res, "res");
        dispatch({ type: FETCH_SMURF_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_DATA_FAILURE, payload: err.response });
      });
  };
};

export const addSmurf = payload => {
  return { type: ADD_SMURF, payload: payload };
};
