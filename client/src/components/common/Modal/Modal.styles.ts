import styled from 'styled-components';

// import type { Theme } from '../../../theme';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 16px;
  cursor: pointer;
`;
