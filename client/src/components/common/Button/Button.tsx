import React from 'react';

import BaseInterface from '../../../BaseInterface';
import { StyledButton } from './Button.styles';

interface ButtonProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  hover?: boolean;
  focus?: boolean;
  active?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { hover = true, active = true, focus = true, ...rest } = props;
  return <StyledButton {...rest} active={active} focus={focus} hover={hover}></StyledButton>;
};

export default Button;
