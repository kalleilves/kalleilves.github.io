import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { useMatch } from '@reach/router';

import { bodyTypographyCss, spaceCss } from '../theme';

const activeCss = css`
  &,
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  overflow-y: auto;
`;

const NavLinkBase = styled(Link)`
  ${bodyTypographyCss};

  color: ${({ theme }) => theme.colors.textPrimary};
  flex-grow: 0;
  padding: ${spaceCss(2, 4)};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-decoration: none;
  border-bottom: 3px solid;
  border-bottom-color: white;
  transition: border-bottom-color 0.3s;

  &:hover {
    border-bottom-color: rgba(0, 0, 0, 0.1);
  }

  ${({ $active }) => $active && activeCss};
`;

const NAVIGATION_PAGES_QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___navigationIndex] }
      filter: { frontmatter: { inNavigation: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

const NavLink = ({ to, ...props }) => {
  const match = useMatch(to);

  return <NavLinkBase $active={match} to={to} {...props} />;
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
