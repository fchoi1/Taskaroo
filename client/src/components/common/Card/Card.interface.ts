import React from 'react';
import BaseInterface from '../../../BaseInterface';
interface CardProps extends BaseInterface {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
}

export default CardProps;
