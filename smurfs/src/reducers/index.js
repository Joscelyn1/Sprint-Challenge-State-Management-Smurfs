import {
  FETCH_SMURF_DATA_START,
  FETCH_SMURF_DATA_SUCCESS,
  FETCH_SMURF_DATA_FAILURE,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: "error"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_SMURF_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ""
      };
    case ADD_SMURF:
      return {
        ...state,
        isLoading: false,
        smurfs: [state.smurfs, action.payload],
        error: ""
      };
    default:
      return state;
  }
};
