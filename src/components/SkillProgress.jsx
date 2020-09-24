import React from 'react';

import Progress from './Progress';
import Typography from './Typography';
import Box from './Box';

const labelByLevel = {
  moderate: 'Moderate skills',
  good: 'Good skills',
  excellent: 'Excellent skills',
};

const valueByLevel = {
  moderate: 33.33,
  good: 66.66,
  excellent: 100,
};

const SkillProgress = ({
  level = 'good',
  skill,
  description,
  label: labelProp,
}) => {
  const label = labelProp
    ? labelProp
    : labelByLevel[level] ?? labelByLevel.good;

  const value = valueByLevel[level] ?? valueByLevel.good;
  const hasDescription = Boolean(description);

  return (
    <div>
      <Box mb={2}>
        <Typography variant="h6" as="h2" mb={hasDescription ? 1 : 0}>
          {skill}
        </Typography>
        {hasDescription && (
          <Typography>{description}</Typography>
        )}
      </Box>
      <Progress value={value} steps={3} />
      <Typography mt={1}>{label}</Typography>
    </div>
  );
};

export default SkillProgress;
