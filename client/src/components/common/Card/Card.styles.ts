// components/Button/Button.styles.ts
import styled from 'styled-components';

import { Theme } from '../../../theme';

export const CardContainer = styled.div<{ theme: Theme }>`
  background-color: black;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 5px 0;
`;

export const CardTitle = styled.h3<{ theme: Theme }>`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CardDescription = styled.p<{ theme: Theme }>`
  font-size: 14px;
  color: yellow;
`;

export const CardContent = styled.div<{ theme: Theme }>`
  margin-top: 12px;
  color: red;
`;

export const CardFooter = styled.div<{ theme: Theme }>`
  margin-top: 12px;
  text-align: right;
  font-size: 12px;
  color: #999999;
`;
