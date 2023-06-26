import React, { memo, useState } from "react";
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
  position: relative;
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
const ModalBlock = styled.div`
  position: absolute;
  width: 300px;
  background-color: #fff;
  right: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ProductListComponent = memo<ProductCardProps>(({ id, description, price, image, title, onClick }) => {
  const [confirmation, setConfirmation] = useState(false);

  const openConfirmation = () => {
    setConfirmation(true);
  };

  const closeConfirmation = () => {
    setConfirmation(false);
  };

  const onConfirmation = () => {
    onClick(id);
  };

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
      <Button innerClassName={s.btn} onClick={openConfirmation}>
        x
      </Button>
      {confirmation && (
        <ModalBlock>
          Вы уверены что хотите удалить продукт?
          <ButtonsWrapper>
            <Button innerClassName={`${s.modalBtn} ${s.greenBtn}`} onClick={onConfirmation}>
              Да
            </Button>
            <Button innerClassName={`${s.modalBtn} ${s.redBtn}`} onClick={closeConfirmation}>
              Нет
            </Button>
          </ButtonsWrapper>
        </ModalBlock>
      )}
    </Wrapper>
  );
});

export default ProductListComponent;
