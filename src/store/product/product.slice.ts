import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';

const initialState: ProductState = {
    products: [],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
        },
        setProduct: (state, action: PayloadAction<ProductModel>) => {
            state.products = [action.payload, ...state.products];
        },
    },
});

export const { setProductsAction, setProduct } = productsSlice.actions;

export default productsSlice.reducer;
