import * as ACTIONS from "../actions";

const initialState = {
  loadingSmurf: false,
  smurfs: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SMURF:
      return { ...state, loadingSmurf: true };
    case ACTIONS.FETCH_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurf: false,
        smurfs: action.payload,
        error: "",
      };
    case ACTIONS.FETCH_SMURF_FAIL:
      return {
        ...state,
        loadingSmurf: false,
        smurfs: [],
        error: action.payload,
      };
    case ACTIONS.ADD_SMURF:
      return {
        ...state,
        loadingSmurf: false,
      };
    case ACTIONS.ADD_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurf: false,
        smurfs: action.payload,
        error: "",
      };
    case ACTIONS.ADD_SMURF_SUCCESS:
      return {
        ...state,
        loadingSmurf: false,
        error: "",
      };
    default:
      return state;
  }
};
