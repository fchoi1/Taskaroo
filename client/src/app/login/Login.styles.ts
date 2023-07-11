import styled from 'styled-components';

import Container from '../../components/common/Containers';

// Define the styled components
export const LoginContainer = styled(Container)`
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
