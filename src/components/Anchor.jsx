import styled from 'styled-components';

const Anchor = styled.a`
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    text-decoration: none;
  }
`;

export default Anchor;
