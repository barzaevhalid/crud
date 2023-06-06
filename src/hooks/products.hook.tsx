import { useEffect, useState } from 'react';
import { ProductModel } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export const useProducts = () => {
    const [product, setProduct] = useState<ProductModel[]>([]);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState('loading');
    const fetchProducts = async () => {
        setLoading('loading');
        try {
            const data = await fetchProductsApi();
            setProduct(data as unknown as ProductModel[]);
            setLoading('loaded');
            setErr('');
        } catch (e) {
            setErr(`Something went wrong! Error: ${e}`);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return { product, loading, err };
};
