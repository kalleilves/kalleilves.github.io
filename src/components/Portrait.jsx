import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Image = styled(Img)`
  border-radius: 50%;
  max-width: 300px;
  margin: 0px auto;
`;

const Portrait = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "portrait.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Image fluid={data.file.childImageSharp.fluid} />;
};

export default Portrait;
