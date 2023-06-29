import React, { useState } from "react";
import ProductListComponent from "./list/product-list.component";
import { useProducts } from "../../hooks/products.hook";
import ProductCreationContainer from "../modal/ProductCreationContainer";
import { LoadingState } from "../../types";
import Loading from "../Loading";
import Error from "../Error";
import { useAppDispatch } from "../../store/store";
import { removeProduct } from "../../store/product/product.slice";
import { fetchDeleteProduct } from "../../services/product-api.service";
import styled from "styled-components";

const ProductRemoveMassage = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  width: 200px;
  padding: 10px;
  border: 1px solid black;
`;
const RemovedMessage = styled.div`
  color: red;
  text-align: center;
  padding-bottom: 10px;
`;

const ProductListContainer = () => {
  const { products, loading } = useProducts();
  const [removedProduct, setRemovedProduct] = useState({ removed: false, title: "" });

  const dispatch = useAppDispatch();

  const onRemoveProduct = async (id: number) => {
    dispatch(removeProduct(id));

    setTimeout(() => {
      setRemovedProduct(prevState => ({ ...prevState, removed: false }));
    }, 1000);
  };

  return (
    <>
      <ProductCreationContainer />

      {(loading === LoadingState.Loading && <Loading />) || (loading === LoadingState.Error && <Error />)}

      {removedProduct.removed && (
        <ProductRemoveMassage>
          <RemovedMessage>Removed</RemovedMessage> {removedProduct.title}
        </ProductRemoveMassage>
      )}

      {products.map(prod => (
        <ProductListComponent key={prod.id} onClick={onRemoveProduct} {...prod} />
      ))}
    </>
  );
};

export default ProductListContainer;
