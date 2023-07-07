import styled, { css } from 'styled-components';

// import type { Theme } from '../../../theme';
import { ContainerProps, GridProps } from './Containers';

export const StyledContainer = styled.div<ContainerProps>`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction:  ${({ flex }) => flex || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  ${({ padding }) => applyPadding(padding)};
  ${({ gap }) => applyGap(gap)};
  ${({ fluid }) => applyFluidStyles(fluid)};
  ${({ breakpoints }) => applyBreakpoints(breakpoints)};


  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    justify-content: center;
  }
`;

export const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 12}, 1fr);
  gap: ${({ gap }) => gap || '1rem'};

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: repeat(${rows}, 1fr);
    `};
`;

const applyPadding = (padding?: string | number) => {
  const paddingValue = padding !== undefined ?
    typeof padding === 'number' ? `${padding * 0.25}rem` : padding
    : '0.25rem';
    console.log('padding', padding, 'paddingvlaue', paddingValue)
    return css`
    padding: ${paddingValue};
  `;
};

const applyGap = (gap?: string | number) => {
  const gapValue = gap !== undefined ?
    typeof gap === 'number' ? `${gap * 0.25}rem` : gap
    : '0rem';
    console.log('gap', gap, 'gapvlaue', gapValue,)
    return css`
    gap: ${gapValue};
  `;
};

const applyFluidStyles = (fluid?: boolean ) => {
  if (fluid){
    return css`
      width: 100%;
      max-width: 100%;
    `;
  }
}

const applyBreakpoints = (breakpoints?: ContainerProps['breakpoints']) => {
  if (!breakpoints) return '';

  const { sm, md, lg, xl } = breakpoints;
  const mediaQueries: string[] = [];

  if (sm) mediaQueries.push(`@media (min-width: ${sm}) { max-width: 540px; }`);
  if (md) mediaQueries.push(`@media (min-width: ${md}) { max-width: 720px; }`);
  if (lg) mediaQueries.push(`@media (min-width: ${lg}) { max-width: 960px; }`);
  if (xl) mediaQueries.push(`@media (min-width: ${xl}) { max-width: 1140px; }`);

  return css`
    ${mediaQueries.join('\n')}
  `;
};