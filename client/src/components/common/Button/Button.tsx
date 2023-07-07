import { FC, MouseEventHandler, ReactNode } from 'react';

import { StyledButton } from './Button.styles';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  hover?: boolean; // renders if null
  focus?: boolean; // renders if null
  active?: boolean; // renders if null
  className?: string;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton type={props.type ? props.type : 'button'} {...props}></StyledButton>;
};

export default Button;
