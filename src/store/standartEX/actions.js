export const ADD_STANDART = "ADD_STANDART";
export const MANAGE_STANDART = "MANAGE_STANDART";
export const REMOVE_STANDART = "REMOVE_STANDART";

export function addStandart(val) {
  return {
    type: ADD_STANDART,
    payload: val
  };
}

export function manageStandart(val, idx) {
  return {
    type: MANAGE_STANDART,
    payload: val,
    index: idx
  };
}

export function removeStandart(idx) {
  return {
    type: REMOVE_STANDART,
    payload: idx
  };
}
