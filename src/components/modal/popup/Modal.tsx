import React, { ReactNode } from "react";
import s from "./Modal.module.css";
import styled from "styled-components";

import Button from "../../Button";

interface ModalProps {
  closeModal: () => void;
  title?: string;
  children?: ReactNode;
}
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
  z-index: 1000;
`;
const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 400px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = ({ closeModal, title, children }: ModalProps) => {
  return (
    <ModalWindow onClick={closeModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <div>{title}</div>
          <Button onClick={closeModal} innerClassName={s.close}>
            Close
          </Button>
        </ModalHeader>
        <div>{children}</div>
      </ModalContent>
    </ModalWindow>
  );
};

export default Modal;
