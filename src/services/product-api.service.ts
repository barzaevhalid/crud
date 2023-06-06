import { ProductModel } from '../models/product.model';
import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';

export const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
    try {
        const { data } = await axios.get(PRODUCTS_URL);
        return data;
    } catch (e) {
        throw new Error('Упс!');
    }
};
