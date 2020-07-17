import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const fetchSmurf = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF });
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SMURF_FAIL, payload: err.message });
      });
  };
};

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err.reponse });
      });
  };
};
