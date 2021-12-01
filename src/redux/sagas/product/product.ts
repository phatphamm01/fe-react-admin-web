import { call, put } from "redux-saga/effects";
import {
  getAllProductsSuccess,
  getProductDetailSuccess,
  getProductsByTypeSuccess,
} from "@redux/slices/product";
import fetchProduct from "@services/products";
import { IDataResponse } from "@common/interface/IAxiosResponse";

export function* getProductsByTypeSaga(action: any) {
  const { payload } = action;

  const response: IDataResponse = yield call(
    fetchProduct.getProductByType,
    payload
  );

  const { data } = response;

  yield put(getProductsByTypeSuccess(data));
}

export function* getAllProductsSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(
    fetchProduct.getAllProduct,
    payload
  );

  const { data } = response;

  yield put(getAllProductsSuccess(data));
}

export function* getProductDetailSaga(action: any) {
  const { payload } = action;
  const response: IDataResponse = yield call(
    fetchProduct.getProductDetail,
    payload
  );

  const { data } = response;

  yield put(getProductDetailSuccess(data));
}
