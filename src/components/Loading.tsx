import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    width: 100px;
    height: 100px;
`;

const Loading = () => {
    return (
        <ImageWrapper>
            <Image src='https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif' alt='' />
        </ImageWrapper>
    );
};

export default Loading;
