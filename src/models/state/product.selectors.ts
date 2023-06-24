import { RootState } from "../../store/store";

export const selectProducts = (state: RootState) => state.products.products;

export const selectViewProduct = (state: RootState) => state.products.viewProduct;
