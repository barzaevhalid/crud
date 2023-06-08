import React from 'react';
import ProductListComponent from '../product-list.component';
import { useProducts } from '../../../hooks/products.hook';
import ProductCreationContainer from '../../modal/ProductCreationContainer';

const ProductListContainer = () => {
    const { products, loading, err } = useProducts();
    return (
        <>
            <ProductCreationContainer />
            {err && err}
            {loading === 'loading' && loading}
            {products.map(prod => (
                <ProductListComponent key={prod.id} {...prod} />
            ))}
        </>
    );
};

export default ProductListContainer;
