import { takeEvery, takeLatest, put } from "redux-saga/effects";
import * as ActionsWorker from "./actions";

function* addAsync(action) {
  console.log(action);

  yield put(ActionsWorker.addSaga(action.payload));
}
export function* watchAddSaga() {
  yield takeEvery(ActionsWorker.ADD_SAGA_ASYNC, addAsync);
}
