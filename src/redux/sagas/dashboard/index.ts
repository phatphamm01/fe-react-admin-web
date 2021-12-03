import { getBills } from "@redux/slices/bill";
import { getDashboards } from "@redux/slices/dashboard";
import { all, takeLatest } from "redux-saga/effects";
import { getDashboardSaga } from "./dashboard";

export default function* dashboardsSaga() {
  yield all([takeLatest(getDashboards.type, getDashboardSaga)]);
}
