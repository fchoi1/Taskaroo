import styled from 'styled-components';

import Button from '../common/Button';

export const MenuButton = styled(Button)<{ isOpen: boolean }>`
  margin: 5px;
  padding: 0.5em 1.2em;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
  gap: 1em;
`;
