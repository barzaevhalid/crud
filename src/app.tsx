import React from 'react';
import ProductCardComponent from './components/product/product-card.component';
import { productListData } from './data/product.data';

function App() {
    return <ProductCardComponent {...productListData[0]} />;
}

export default App;
