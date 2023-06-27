import React from 'react';

import { StyledButton } from './Button.styles';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  hover?: boolean;
  focus?: boolean;
  active?: boolean;
  className?: string;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { hover = true, active = true, focus = true, ...rest } = props;
  return (
    <StyledButton
      type={props.type ? props.type : 'button'}
      {...rest}
      active={active}
      focus={focus}
      hover={hover}
    ></StyledButton>
  );
};

export default Button;
