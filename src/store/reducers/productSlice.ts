
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store/store";

export type ProductsDataType = {
  
};

const initialState: ProductsDataType = {
  
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },
});

export const productsData = (state: RootState) => state.products;
export const {  } = productSlice.actions;

export default productSlice.reducer;