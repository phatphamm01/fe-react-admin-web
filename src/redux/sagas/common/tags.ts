import { call, put } from "redux-saga/effects";

import { IDataResponse } from "@common/interface/IAxiosResponse";
import fetchCommon from "@services/common";
import { getTagsSuccess } from "@redux/slices/common";

export function* getTagsSaga() {
  const response: IDataResponse = yield call(fetchCommon.getTag);

  const { data } = response;

  yield put(getTagsSuccess(data));
}
