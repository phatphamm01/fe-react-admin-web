import { createSlice } from "@reduxjs/toolkit";
import { ITags, ICategoies, ISizes, IOptions } from "@redux/types/common";

export interface ICommonSlice {
  categories: ICategoies;
  tags: ITags;
  sizes: ISizes;
  colors: IOptions;
  brands: IOptions;
}

const initialState: ICommonSlice = {
  categories: [],
  tags: [],
  sizes: [],
  brands: [],
  colors: [],
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    getCategories() {},
    getCategoriesSuccess(state, action) {
      state.categories = action.payload;
    },

    getTags() {},
    getTagsSuccess(state, action) {
      state.tags = action.payload;
    },

    getSizes() {},
    getSizesSuccess(state, action) {
      state.sizes = action.payload;
    },

    getColors() {},
    getColorsSuccess(state, action) {
      state.colors = action.payload[0].children;
    },

    getBrands() {},
    getBrandsSuccess(state, action) {
      state.brands = action.payload[0].children;
    },
  },
});
export const {
  getCategories,
  getCategoriesSuccess,
  getTags,
  getTagsSuccess,
  getSizes,
  getSizesSuccess,
  getBrands,
  getBrandsSuccess,
  getColors,
  getColorsSuccess,
} = commonSlice.actions;

const commonReducers = commonSlice.reducer;
export default commonReducers;
