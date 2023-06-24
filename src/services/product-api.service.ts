import { ProductModel } from "../models/product.model";
import axios, { AxiosResponse } from "axios";
import { PRODUCTS_URL } from "../constants/api.constants";

export const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
  try {
    const { data } = await axios.get(PRODUCTS_URL);
    return data;
  } catch (e) {
    throw new Error("Упс!");
  }
};

export const createProductApi = async (product: Partial<ProductModel>) => {
  try {
    const { data } = await axios.post(`${PRODUCTS_URL}`, product);
    return data;
  } catch (e) {
    throw new Error("Упс!");
  }
};

export const fetchViewProduct = async (id: number) => {
  try {
    const { data } = await axios.get(`${PRODUCTS_URL}${id}`);
    return data;
  } catch (e) {
    throw new Error("Упс!");
  }
};

export const fetchDeleteProduct = async (id: number) => {
  try {
    const data = await axios.delete(`${PRODUCTS_URL}${id}`);
    return data;
  } catch (e) {
    throw new Error("Упс!");
  }
};
