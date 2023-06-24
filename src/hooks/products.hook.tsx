import { useEffect, useState } from "react";
import { ProductModel } from "../models/product.model";
import { fetchProductsApi, fetchViewProduct } from "../services/product-api.service";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setProducts, setViewProduct } from "../store/product/product.slice";
import { selectProducts, selectViewProduct } from "../models/state/product.selectors";
import { LoadingState } from "../types";

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
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return { products, loading };
};

export const useViewProduct = (id: number) => {
  const [loading, setLoading] = useState(LoadingState.Loading);
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectViewProduct);

  const fetchProduct = async () => {
    try {
      setLoading(LoadingState.Loading);

      const product = await fetchViewProduct(id);
      dispatch(setViewProduct(product));

      setLoading(LoadingState.Loaded);
    } catch (e) {
      setLoading(LoadingState.Error);
    }
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line
  }, []);

  return { product, loading };
};
