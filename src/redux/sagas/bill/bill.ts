import { IDataResponse } from "@common/interface/IAxiosResponse";
import { getBillsSuccess } from "@redux/slices/bill";
import fetchBill from "@services/bill";
import { call, put } from "redux-saga/effects";

export function* getBillsSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(fetchBill.getBill);

  const { data } = response;

  yield put(getBillsSuccess(data));
}
