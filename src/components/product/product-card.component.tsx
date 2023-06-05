import React, { memo, FC } from 'react';
import { ProductModel } from '../../models/product.model';
import styled from 'styled-components';

type ProductCardProps = ProductModel;

const Wrapper = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 100px;
    gap: 20px;
`;
const ImageWrapper = styled.div`
    width: 300px;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const TextWrapper = styled.div``;
const Title = styled.h1`
    text-align: center;
`;
const Description = styled.div`
    text-align: center;
`;
const Price = styled.div`
    text-align: right;
    padding-top: 20px;
`;
const ProductCardComponent: FC<ProductCardProps> = ({ id, description, price, image, rating, title, category }) => {
    return (
        <Wrapper>
            <ImageWrapper>
                <Image src={image} alt='' />
            </ImageWrapper>
            <TextWrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>{price} $</Price>
            </TextWrapper>
        </Wrapper>
    );
};

export default memo(ProductCardComponent);
