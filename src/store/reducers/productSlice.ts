import { createSlice } from '@reduxjs/toolkit';
import products from 'src/content/products.json';
import { RootState } from 'src/store/store';
import { productType } from 'src/types/features/products';
import { lowerCaseHandler } from 'src/utils/common';

export type ProductsDataType = {
  data: productType[];
  sorting?: 'asc' | 'desc';
  searchKey: string;
  deletedIds: number[];
  selectedIds: number[];
};

const initialState: ProductsDataType = {
  data: products,
  sorting: undefined,
  searchKey: '',
  selectedIds: [],
  deletedIds: [],
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
    //MultiSelect
    selectProducts: (state, action) => {
      const idToDelete = action.payload;
      const existing = state.selectedIds?.find(id => id === idToDelete);
      if (!existing) {
        state.selectedIds?.push(idToDelete);
      } else {
        state.selectedIds = state.selectedIds?.filter(id => id !== idToDelete);
      }
    },
    //DELETE
    deleteSelectedProducts(state) {
      state.deletedIds.push(...state.selectedIds);
      state.selectedIds = [];
    },
  },
});

export const productsData = (state: RootState) => state.products;
export const { setProducts, sortByPrice, searchInProducts, selectProducts, deleteSelectedProducts } =
  productSlice.actions;

export default productSlice.reducer;
