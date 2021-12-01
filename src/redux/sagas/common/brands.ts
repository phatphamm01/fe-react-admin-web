import { call, put } from "redux-saga/effects";

import { IDataResponse } from "@common/interface/IAxiosResponse";
import fetchCommon from "@services/common";
import { getBrandsSuccess } from "@redux/slices/common";

export function* getBrandsSaga() {
  const response: IDataResponse = yield call(fetchCommon.getBrand);

  const { data } = response;

  yield put(getBrandsSuccess(data));
}
