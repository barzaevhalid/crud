import React from 'react';
import CloseIcon from '../assets/icons/plus.svg';
import styled from 'styled-components';

const AddButton = styled.button`
    position: fixed;
    right: 10px;
    bottom: 20px;
    padding: 10px;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    text-align: center;
    width: 100px;
    height: 100px;
    :active {
        background: lightblue;
    }
`;
interface IProp {
    openModal: () => void;
}
const CreateButton: React.FC<IProp> = ({ openModal }) => {
    return (
        <AddButton onClick={openModal}>
            <img src={CloseIcon} alt='plus' />
        </AddButton>
    );
};

export default CreateButton;
