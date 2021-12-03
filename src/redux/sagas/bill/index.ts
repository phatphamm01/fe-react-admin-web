import { getBills } from "@redux/slices/bill";
import { all, takeLatest } from "redux-saga/effects";
import { getBillsSaga } from "./bill";

export default function* billsSaga() {
  yield all([takeLatest(getBills.type, getBillsSaga)]);
}
