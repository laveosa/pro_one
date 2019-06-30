import { ADD_STANDART, MANAGE_STANDART, REMOVE_STANDART } from "./actions";

const innerState = {
  element: []
};

export default (state = innerState, action) => {
  switch (action.type) {
    case ADD_STANDART:
      return Object.assign({}, state, {
        element: [...state.element, action.payload]
      });
    case MANAGE_STANDART:
      return Object.assign({}, state);
    case REMOVE_STANDART:
      return Object.assign({}, state, {
        element: state.element.filter((elem, idx) => idx !== action.payload)
      });
    default:
      return state;
  }
};
