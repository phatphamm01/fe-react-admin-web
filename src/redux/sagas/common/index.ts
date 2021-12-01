import {
  getBrands,
  getCategories,
  getColors,
  getSizes,
  getTags,
} from "@redux/slices/common";
import { all, takeLatest } from "redux-saga/effects";
import { getBrandsSaga } from "./brands";
import { getCategoriesSaga } from "./categories";
import { getColorsSaga } from "./colors";
import { getSizesSaga } from "./sizes";
import { getTagsSaga } from "./tags";

export default function* commonSaga() {
  yield all([
    takeLatest(getCategories.type, getCategoriesSaga),
    takeLatest(getTags.type, getTagsSaga),
    takeLatest(getSizes.type, getSizesSaga),
    takeLatest(getColors.type, getColorsSaga),
    takeLatest(getBrands.type, getBrandsSaga),
  ]);
}
