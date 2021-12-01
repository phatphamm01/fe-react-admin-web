import { call, put } from "redux-saga/effects";

import { IDataResponse } from "@common/interface/IAxiosResponse";
import fetchCommon from "@services/common";
import { getSizesSuccess } from "@redux/slices/common";

export function* getSizesSaga() {
  const response: IDataResponse = yield call(fetchCommon.getSize);

  const { data } = response;

  yield put(getSizesSuccess(data));
}
