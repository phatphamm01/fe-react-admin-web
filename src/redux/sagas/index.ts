import { all } from "@redux-saga/core/effects";
import billsSaga from "./bill";
import commonSaga from "./common";
import dashboardsSaga from "./dashboard";
import productSaga from "./product";

export default function* rootSagas() {
  yield all([productSaga(), commonSaga(), billsSaga(), dashboardsSaga()]);
}
