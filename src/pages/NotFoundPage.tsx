import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #d3d3d3;
`;
const Title = styled.div`
    font-size: 100px;
    text-align: center;
`;
const Subtitle = styled.div`
    text-align: center;
    font-size: 30px;
`;
const NotFoundPage = () => {
    return (
        <Wrapper>
            <div>
                <Title>404</Title>
                <Subtitle>Страница не найдена</Subtitle>
            </div>
        </Wrapper>
    );
};

export default NotFoundPage;
