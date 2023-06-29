import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useViewProduct } from "../hooks/products.hook";
import { LoadingState } from "../types";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NotFoundPage from "./NotFoundPage";

const Container = styled.div`
  width: 900px;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
`;
const ImageWrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;
const Image = styled.img`
  max-width: 200px;
`;
const Description = styled.p`
  text-align: center;
`;
const Price = styled.div`
  text-align: right;
`;

const ViewProduct = () => {
  const { id } = useParams();
  const { viewProduct, loading } = useViewProduct(Number(id));

  if (!viewProduct) {
    return <NotFoundPage />;
  }

  return (
    <>
      {(loading === LoadingState.Loading && <Loading />) || (loading === LoadingState.Error && <Error />)}

      <Container>
        <Title>{viewProduct.title}</Title>
        <ImageWrapper>
          <Image src={viewProduct.image} />
        </ImageWrapper>
        <Description>{viewProduct.description}</Description>
        <Price>Price: {viewProduct.price}$</Price>
      </Container>
    </>
  );
};

export default ViewProduct;
