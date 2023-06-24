import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const ContentWrapper = styled.div`
    text-align: center;
`;
const Image = styled.img`
    height: 300px;
    width: 300px;
`;
const Error = () => {
    return (
        <ImageWrapper>
            <ContentWrapper>
                <h1>Упс, что то пошло не так</h1>
                <Image src='https://abrakadabra.fun/uploads/posts/2022-02/1644222106_3-abrakadabra-fun-p-grustnii-smailik-chernii-9.jpg'></Image>
            </ContentWrapper>
        </ImageWrapper>
    );
};

export default Error;
