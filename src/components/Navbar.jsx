import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { useMatch } from '@reach/router';

import { bodyTypographyCss, spaceCss } from '../theme';

const scrollIntoView = (element, options) => {
  if (typeof element?.scrollIntoView === 'function') {
    element.scrollIntoView(options);
  }
};

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

const NavLinkBase = styled(Link)`
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

const NavLink = ({ to, ...props }) => {
  const match = useMatch(to);
  const ref = useRef();

  useEffect(() => {
    if (match) {
      scrollIntoView(ref.current);
    }
  }, []);

  return <NavLinkBase ref={ref} $active={match} to={to} {...props} />;
};

const Navbar = ({ links }) => {
  return (
    <Nav>
      {links.map(({ title, path }) => (
        <NavLink key={path} to={path}>
          {title}
        </NavLink>
      ))}
    </Nav>
  );
};

export default Navbar;
