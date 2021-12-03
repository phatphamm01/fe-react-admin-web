import { IDataResponse } from "@common/interface/IAxiosResponse";
import { getDashboardsSuccess } from "@redux/slices/dashboard";

import fetchDashboard from "@services/dashboard";
import { call, put } from "redux-saga/effects";

export function* getDashboardSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchDashboard.getDashboard);

  const { data } = response;

  yield put(getDashboardsSuccess(data));
}
