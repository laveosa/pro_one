import { ADD_STANDART, MANAGE_STANDART, REMOVE_STANDART } from "./actions";

export default store => next => action => {
  // console.log(action.type);

  switch (action.type) {
    case ADD_STANDART:
      if (isObjFull(action.payload)) {
        return next(action);
      } else {
        console.log(action.payload);
      }
      break;
    case MANAGE_STANDART:
      if (isObjFull(action.payload)) {
        return next(action);
      } else {
        console.log(action.payload);
      }
      break;
    case REMOVE_STANDART:
      return next(action);
    default:
      return next(action);
  }
};

function isObjFull(obj) {
  let condition = true;
  const keys = Object.keys(obj);

  keys.forEach((ele, idx) => {
    if (!obj[ele] || obj[ele].length === 0) {
      condition = false;
    }
  });

  return condition;
}
