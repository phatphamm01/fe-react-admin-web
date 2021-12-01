import { all } from "@redux-saga/core/effects";
import commonSaga from "./common";
import productSaga from "./product";

export default function* rootSagas() {
  yield all([productSaga(), commonSaga()]);
}
