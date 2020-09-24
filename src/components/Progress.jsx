import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { radiiCss } from '../theme';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary50};
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: ${radiiCss(1)};
  overflow: hidden;
`;

const Bar = styled(animated.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StepIndicator = styled.div`
  width: 2px;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0px;
`;

const Progress = ({ value = 0, steps }) => {
  const barStyle = useSpring({ width: `${value}%`, from: { width: '0%' } });
  const stepSize = steps ? 100 / steps : 0;

  const stepIndicators =
    steps &&
    [...Array(steps)].map((v, i) => (
      <StepIndicator key={i} style={{ left: `${(i + 1) * stepSize}%` }} />
    ));

  return (
    <Container>
      <Bar style={barStyle} />
      {stepIndicators}
    </Container>
  );
};

export default Progress;
