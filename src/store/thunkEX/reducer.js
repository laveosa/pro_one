import { ADD_THUNK, MANAGE_THUNK, REMOVE_THUNK } from "./actions";

const innerState = {
  element: []
};

export default (state = innerState, action) => {
  switch (action.type) {
    case ADD_THUNK:
      return Object.assign({}, state, {
        element: [...state.element, action.payload]
      });
    case MANAGE_THUNK:
      return Object.assign({}, state);
    case REMOVE_THUNK:
      return Object.assign({}, state, {
        element: state.element.filter((elem, idx) => idx !== action.payload)
      });
    default:
      return state;
  }
};
