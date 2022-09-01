import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { bodyTypographyCss, spaceCss } from '../theme';

const activeCss = css`
  &,
  &:hover {
    color: ${({ theme }) => theme.colors.textHeading};
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  display: flex;
  overflow-y: auto;
`;

const NavLinkUnderline = styled(motion.div)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 3px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary}; ;
`;

const NavLinkBase = styled.a`
  ${bodyTypographyCss};

  flex-grow: 0;
  padding: ${spaceCss(2, 4)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  transition: color 0.3s, color 0.3s;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.textHeading};
  }

  ${({ $active }) => $active && activeCss};
`;

const NavLink = ({ href, children, ...props }) => {
  const { asPath } = useRouter();

  const active = asPath === href;

  return (
    <Link href={href} passHref {...props}>
      <NavLinkBase $active={active}>
        {children} {active && <NavLinkUnderline layoutId="navLinkUnderline" />}
      </NavLinkBase>
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
