import React from 'react';

import BaseInterface from '../../../BaseInterface';
import { ModalCloseButton, ModalContainer, ModalContent, ModalTitle } from './Modal.styles';

interface ModalProps extends BaseInterface {
  onClose?: () => void;
  children?: React.ReactNode;
  title: string;
}

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
