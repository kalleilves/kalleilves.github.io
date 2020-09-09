const createMediaQueries = (breakpoints) => {
  const { keys, values, unit } = breakpoints;

  const up = (key) => {
    const value = typeof values[key] === 'number' ? values[key] : key;

    return `@media (min-width:${value}${unit})`;
  };

  const down = (key) => {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      return up('xs');
    }

    const value =
      typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;

    return `@media (max-width:${value - 0.5}${unit})`;
  };

  const between = (start, end) => {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return (
      `@media (min-width:${
        typeof values[start] === 'number' ? values[start] : start
      }${unit}) and ` +
      `(max-width:${
        (endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number'
          ? values[keys[endIndex + 1]]
          : end) - 0.5
      }${unit})`
    );
  };

  return { up, down, between };
};

const createBreakpoints = (breakpoints) => {
  const { keys, values, unit } = breakpoints;

  const scaleBreakpoints = keys
    .map((k) => `${values[k]}${unit}`)
    .slice(1, keys.length - 1);

  return Object.assign(
    scaleBreakpoints,
    values,
    createMediaQueries(breakpoints),
  );
};

export default createBreakpoints;
