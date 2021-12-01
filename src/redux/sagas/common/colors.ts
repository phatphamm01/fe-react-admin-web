import { call, put } from "redux-saga/effects";

import { IDataResponse } from "@common/interface/IAxiosResponse";
import fetchCommon from "@services/common";
import { getColorsSuccess } from "@redux/slices/common";

export function* getColorsSaga() {
  const response: IDataResponse = yield call(fetchCommon.getColor);

  const { data } = response;

  yield put(getColorsSuccess(data));
}
