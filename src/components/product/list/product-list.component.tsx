import React, { memo } from "react";
import { ProductModel } from "../../../models/product.model";
import Description from "../../Description";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../Button";
import s from "./Product-list.module.css";

interface ProductCardProps extends ProductModel {
  onClick: (id: number) => void;
}

const Wrapper = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 30px;
  padding: 25px;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(34, 60, 80, 0.2);
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
`;
const Image = styled.img`
  max-height: 150px;
  max-width: 150px;
`;
const TextWrapper = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  text-align: center;
`;
const Desc = styled.div`
  word-break: break-all;
  text-align: center;
`;
const Price = styled.div`
  text-align: right;
  margin-top: 20px;
`;
const Symbol = styled.span`
  font-size: 12px;
`;
const ProductListComponent = memo<ProductCardProps>(({ id, description, price, image, title, onClick }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={image} alt='#' />
      </ImageWrapper>
      <TextWrapper>
        <Link to={`view/${id}`}>
          <Title>{title}</Title>
        </Link>

        <Desc>
          <Description text={description} maxLength={150} />
        </Desc>
        <Price>
          Price: {price}
          <Symbol>$</Symbol>
        </Price>
      </TextWrapper>
      <Button innerClassName={s.btn} onClick={() => onClick(id)}>
        x
      </Button>
    </Wrapper>
  );
});

export default ProductListComponent;
