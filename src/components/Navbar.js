import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { bodyTypographyCss, spaceCss } from '../theme';

const activeCss = css`
  &,
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textHeading};
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  overflow-y: auto;
`;

const NavLinkBase = styled.a`
  ${bodyTypographyCss};

  flex-grow: 0;
  padding: ${spaceCss(2, 4)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  border-bottom: 3px solid;
  border-bottom-color: transparent;
  transition: border-bottom-color 0.3s, color 0.3s;
  white-space: nowrap;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.divider};
  }

  ${({ $active }) => $active && activeCss};
`;

const NavLink = ({ href, children, ...props }) => {
  const { asPath } = useRouter();

  const active = asPath === href;

  return (
    <Link href={href} passHref {...props}>
      <NavLinkBase $active={active}>{children}</NavLinkBase>
    </Link>
  );
};

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="/">About me</NavLink>
      <NavLink href="/skills">Skills</NavLink>
      <NavLink href="/background">Background</NavLink>
    </Nav>
  );
};

export default Navbar;
