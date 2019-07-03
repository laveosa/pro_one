export const ADD_SAGA = "ADD_SAGA";
export const MANAGE_SAGA = "MANAGE_SAGA";
export const REMOVE_SAGA = "REMOVE_SAGA";
export const ADD_SAGA_ASYNC = "ADD_SAGA_ASYNC";
export const MANAGE_SAGA_ASYNC = "MANAGE_SAGA_ASYNC";
export const REMOVE_SAGA_ASYNC = "REMOVE_SAGA_ASYNC";

export function addSagaAsync(val) {
  return {
    type: ADD_SAGA_ASYNC,
    payload: val
  };
}
export function addSaga(val) {
  return {
    type: ADD_SAGA,
    payload: val
  };
}

export function manageSagaAsync() {
  return {
    type: MANAGE_SAGA_ASYNC
  };
}
export function manageSaga(val, idx) {
  return {
    type: MANAGE_SAGA,
    payload: val,
    index: idx
  };
}

export function removeSagaAsync() {
  return {
    type: REMOVE_SAGA_ASYNC
  };
}
export function removeSaga(idx) {
  return {
    type: REMOVE_SAGA,
    payload: idx
  };
}
