import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type TooltipProps = {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children?: ReactNode;
};

const TooltipWrapper = styled.div<{ position?: 'top' | 'bottom' | 'left' | 'right' }>`
  position: relative;
  display: inline-block;

  &:hover .tooltip-content {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipContent = styled.div<{ position?: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 999;

  ${({ position }) => {
    switch (position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
        `;
      case 'right':
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        `;
      default:
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}
`;

const Tooltip: FC<TooltipProps> = ({ text, position = 'bottom', children }) => {
  return (
    <TooltipWrapper position={position}>
      {children}
      <TooltipContent className="tooltip-content" position={position}>
        {text}
      </TooltipContent>
    </TooltipWrapper>
  );
};

export default Tooltip;
