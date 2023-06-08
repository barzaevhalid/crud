import React, { ReactNode } from 'react';
import styled from 'styled-components';

const ModalWindow = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    width: 400px;
    height: 200px;
`;
const OnClose = styled.button`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
interface IProp {
    closeModal: () => void;
    title?: string;
    children?: ReactNode;
}
const Modal: React.FC<IProp> = ({ closeModal, title, children }) => {
    return (
        <ModalWindow onClick={closeModal}>
            <ModalContent onClick={e => e.stopPropagation()}>
                {title}
                <ModalHeader>
                    {children}
                    <OnClose onClick={closeModal}>X</OnClose>
                </ModalHeader>
            </ModalContent>
        </ModalWindow>
    );
};

export default Modal;
