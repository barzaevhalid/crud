import React from 'react';
import ProductListComponent from '../product-list.component';
import { useProducts } from '../../../hooks/products.hook';

const ProductListContainer = () => {
    const { product, loading, err } = useProducts();

    return (
        <>
            {err && err}
            {loading === 'loading' && loading}
            {product.map(prod => (
                <ProductListComponent {...prod} />
            ))}
        </>
    );
};

export default ProductListContainer;
