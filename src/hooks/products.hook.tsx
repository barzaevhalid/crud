import { useEffect, useState } from "react";
import { fetchProductsApi } from "../services/product-api.service";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setProducts } from "../store/product/product.slice";

import { selectProducts } from "../models/state/product.selectors";

import { LoadingState } from "../types";
import { ProductModel } from "../models/product.model";

export const useProducts = () => {
  const products = useAppSelector(selectProducts);
  const [loading, setLoading] = useState(LoadingState.Loading);

  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    setLoading(LoadingState.Loading);
    try {
      const data = await fetchProductsApi();
      dispatch(setProducts(data as unknown as ProductModel[]));
      setLoading(LoadingState.Loaded);
    } catch (e) {
      setLoading(LoadingState.Error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("products")) {
      fetchProducts();
    } else {
      dispatch(setProducts(JSON.parse(localStorage.getItem("products") || "")));
      setLoading(LoadingState.Loaded);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return { products, loading };
};

export const useViewProduct = (id: number) => {
  const [loading, setLoading] = useState(LoadingState.Loaded);

  //@ts-ignore
  const products: ProductModel[] = JSON.parse(localStorage.getItem("products"));
  const viewProduct = products.find(product => product.id === id);

  return { viewProduct, loading };
};
