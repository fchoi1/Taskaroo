import { CSSProperties, FC, ReactNode } from 'react';

import { GridContainer, StyledContainer } from './Containers.styles';

export interface GridProps {
  children: ReactNode;
  columns?: number;
  gap?: string;
  rows?: number;
}

export interface ContainerProps {
  children: ReactNode;
  flex?: CSSProperties['flexDirection'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  padding?: string | number;
  gap?: string | number;
  fluid?: boolean;
  breakpoints?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

const Grid: FC<GridProps> = (props) => {
  const { children, ...rest } = props;
  return <GridContainer {...rest}>{children}</GridContainer>;
};

const Container: FC<ContainerProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export { Container, Grid };
