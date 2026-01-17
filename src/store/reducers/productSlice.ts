import { createSlice } from '@reduxjs/toolkit';
import products from 'src/content/products.json';
import { RootState } from 'src/store/store';
import { productType } from 'src/types/features/products';
import { lowerCaseHandler } from 'src/utils/common';

export type ProductsDataType = {
  data: productType[];
  sorting?: 'asc' | 'desc';
  searchKey: string;
};

const initialState: ProductsDataType = {
  data: products,
  sorting: undefined,
  searchKey: '',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    //SORTING
    sortByPrice: (state, action) => {
      state.sorting = action.payload;
    },
    //SEARCH
    searchInProducts: (state, action) => {
      state.searchKey = lowerCaseHandler(action.payload);
    },
  },
});

export const productsData = (state: RootState) => state.products;
export const { setProducts, sortByPrice, searchInProducts } =
  productSlice.actions;

export default productSlice.reducer;
