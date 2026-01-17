import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'src/store/store';
import { productType } from 'src/types/features/products';
import products from 'src/content/products.json';

export type ProductsDataType = {
  data: productType[];
  sortedData?: productType[];
  sorting?: 'asc' | 'desc' | undefined;
};

const initialState: ProductsDataType = {
  data: products,
  sortedData: [],
  sorting: undefined,
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
      if (!action.payload) {
        // reset sorting
        state.sortedData = state.data;
        state.sorting = undefined;
      } else if (action.payload === 'asc') {
        // ascending sort
        state.sorting = 'asc';
        state.sortedData = [...state.data].sort(
          (current, next) => current.price - next.price,
        );
      } else if (action.payload === 'desc') {
        // descending sort
        state.sorting = 'desc';
        state.sortedData = [...state.data].sort(
          (current, next) => next.price - current.price,
        );
      }
    },
  },
});

export const productsData = (state: RootState) => state.products;
export const { setProducts, sortByPrice } = productSlice.actions;

export default productSlice.reducer;
