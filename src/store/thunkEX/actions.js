export const ADD_THUNK = "ADD_THUNK";
export const MANAGE_THUNK = "MANAGE_THUNK";
export const REMOVE_THUNK = "REMOVE_THUNK";

export function addThunk(val) {
  return dispatch => {
    dispatch({
      type: ADD_THUNK,
      payload: val
    });
  };
}

export function manageThunk(val, idx) {
  return dispatch => {
    dispatch({
      type: MANAGE_THUNK,
      payload: val,
      index: idx
    });
  };
}

export function removeThunk(idx) {
  return dispatch => {
    dispatch({
      type: REMOVE_THUNK,
      payload: idx
    });
  };
}
