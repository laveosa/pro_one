import { ADD_SAGA, MANAGE_SAGA, REMOVE_SAGA } from "./actions";

const innerState = {
  element: []
};

export default (state = innerState, action) => {
  switch (action.type) {
    case ADD_SAGA:
      return Object.assign({}, state, {
        element: [...state.element, action.payload]
      });
    case MANAGE_SAGA:
      return Object.assign({}, state);
    case REMOVE_SAGA:
      return Object.assign({}, state, {
        element: state.element.filter((elem, idx) => idx !== action.payload)
      });
    default:
      return state;
  }
};
