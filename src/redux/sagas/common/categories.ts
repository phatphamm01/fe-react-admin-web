import { call, put } from "redux-saga/effects";

import { getCategoriesSuccess } from "@redux/slices/common";
import { IDataResponse } from "@common/interface/IAxiosResponse";
import fetchCommon from "@services/common";

export function* getCategoriesSaga() {
  const response: IDataResponse = yield call(fetchCommon.getCategories);

  const { data } = response;

  yield put(getCategoriesSuccess(data));
}
