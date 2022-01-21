import styled, { css } from 'styled-components';

import { bodyTypographyCss, spaceCss, radiiCss } from '../theme';

const fullWidthCss = css`
  width: 100%;
  display: flex;
`;

const ButtonBase = styled.button`
  ${bodyTypographyCss};

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: white;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  min-width: 64px;
  padding: 16px 24px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  white-space: nowrap;
  border-radius: ${radiiCss(1)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryContrastText};
  }

  ${({ $fullWidth }) => $fullWidth && fullWidthCss};
`;

const IconContainer = styled.span`
  display: inherit;

  ${({ $isStart }) =>
    $isStart &&
    css`
      padding-right: ${spaceCss(1)};
    `}

  ${({ $isEnd }) =>
    $isEnd &&
    css`
      padding-left: ${spaceCss(1)};
    `}
`;

const Label = styled.span`
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

const Button = ({
  fullWidth,
  startIcon,
  endIcon,
  children,
  as: asProp = 'button',
  ...props
}) => {
  return (
    <ButtonBase $fullWidth={fullWidth} as={asProp} {...props}>
      <Label>
        {startIcon && <IconContainer $isStart>{startIcon}</IconContainer>}
        {children}
        {endIcon && <IconContainer $isEnd>{endIcon}</IconContainer>}
      </Label>
    </ButtonBase>
  );
};

export default Button;
