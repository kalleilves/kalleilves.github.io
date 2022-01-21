import styled, { css } from 'styled-components';

const ImageBase = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;

  ${({ $placeholder }) =>
    !$placeholder &&
    css`
      position: absolute;
    `}
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  max-width: 300px;
  margin: 0px auto;
  overflow: hidden;
  position: relative;
`;

const Portrait = ({ alt }) => {
  return (
    <ImageContainer>
      <ImageBase alt={alt} src={require('../../public/portrait.jpeg')} />
      <ImageBase
        alt={alt}
        src={require('../../public/portrait.jpeg?lqip')}
        $placeholder
      />
    </ImageContainer>
  );
};

export default Portrait;
