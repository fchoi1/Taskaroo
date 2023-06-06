import React from "react";
import ModalProps from "./Modal.interface";
import {
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from "./Modal.styles";

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
