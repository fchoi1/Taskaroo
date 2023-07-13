import { FC, ReactNode } from 'react';

import { ModalCloseButton, ModalContainer, ModalContent, ModalTitle } from './Modal.styles';

interface ModalProps {
  onClose?: () => void;
  children?: ReactNode;
  title: string;
}

const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
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
