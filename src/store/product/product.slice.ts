import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../../models/state/product-state.model";
import { ProductModel } from "../../models/product.model";

const initialState: ProductState = {
  products: [],
  viewProduct: {} as ProductModel,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<ProductModel>) => {
      state.products = [action.payload, ...state.products];
    },
    setViewProduct: (state, action: PayloadAction<ProductModel>) => {
      state.viewProduct = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
});

export const { setProducts, setProduct, setViewProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
