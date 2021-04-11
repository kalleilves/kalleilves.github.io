import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Image = styled(GatsbyImage)`
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  max-width: 300px;
  margin: 0px auto;
  overflow: hidden;
`;

const Portrait = ({ alt }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "portrait.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  `);

  return (
    <ImageContainer>
      <Image alt={alt} image={data.file.childImageSharp.gatsbyImageData} />
    </ImageContainer>
  );
};

export default Portrait;
