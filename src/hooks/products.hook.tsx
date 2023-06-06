import { useEffect, useState } from 'react';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';
import { useAppDispatch, useAppSelector } from '../store/store';
import { setProductsAction } from '../store/product/product.slice';
import { selectProducts } from '../models/state/product.selectors';

export const useProducts = () => {
    const products = useAppSelector(selectProducts);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState('loading');

    const dispatch = useAppDispatch();

    const fetchProducts = async () => {
        setLoading('loading');
        try {
            const data = await fetchProductsApi();
            dispatch(setProductsAction(data as unknown as ProductModel[]));
            setLoading('loaded');
            setErr('');
        } catch (e) {
            setErr(`Something went wrong! Error: ${e}`);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return { products, loading, err };
};
