import { css } from 'styled-components';

export const bodyTypographyCss = css`
  ${({ theme }) => theme.typography.body};
`;

export const spaceCss = (...values) => css`
  ${({ theme }) =>
    values
      .map((v) => (typeof v === 'number' ? `${theme.space[v]}px` : v))
      .join(' ')}
`;

export const breakpointDownCss = (key) => (...args) => {
  const breakpointCss = css(...args);

  return css`
    ${({ theme }) => theme.breakpoints.down(key)} {
      ${breakpointCss};
    }
  `;
};

export const breakpointUpCss = (key) => (...args) => {
  const breakpointCss = css(...args);

  return css`
    ${({ theme }) => theme.breakpoints.up(key)} {
      ${breakpointCss};
    }
  `;
};

export const breakpointBetweenCss = (start, end) => (...args) => {
  const breakpointCss = css(...args);

  return css`
    ${({ theme }) => theme.breakpoints.between(start, end)} {
      ${breakpointCss};
    }
  `;
};
