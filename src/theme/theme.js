import createBreakpoints from './createBreakpoints';

const fonts = {
  main: "'Open sans', serif",
  heading: "'Noto Serif JP', serif",
};

const colors = {
  textHeading: 'rgba(0, 0, 0, 0.87)',
  textPrimary: 'rgba(0, 0, 0, 0.7)',
  textSecondary: '#586069',
  primary: '#118ab2',
};

const fontSizes = {
  main: '1rem',
  h1: '6rem',
  h2: '3.75rem',
  h3: '3rem',
  h4: '2.125rem',
  h5: '1.5rem',
  h6: '1.25rem',
};

const lineHeights = {
  main: 1.5,
  heading: 1.2,
};

const fontWeights = {
  main: 400,
  heading: 700,
  bold: 700,
};

const baseTypography = {
  lineHeight: lineHeights.main,
  fontWeight: fontWeights.main,
  fontFamily: fonts.main,
  fontSize: fontSizes.main,
  color: colors.textPrimary,
};

const headingTypography = {
  ...baseTypography,
  lineHeight: lineHeights.heading,
  fontWeight: fontWeights.heading,
  fontFamily: fonts.heading,
  color: colors.textHeading,
};

const typography = {
  body: baseTypography,
  h1: {
    ...headingTypography,
    fontSize: fontSizes.h1,
  },
  h2: {
    ...headingTypography,
    fontSize: fontSizes.h2,
  },
  h3: {
    ...headingTypography,
    fontSize: fontSizes.h3,
  },
  h4: {
    ...headingTypography,
    fontSize: fontSizes.h4,
  },
  h5: {
    ...headingTypography,
    fontSize: fontSizes.h5,
  },
  h6: {
    ...headingTypography,
    fontSize: fontSizes.h6,
  },
};

const breakpoints = createBreakpoints({
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  unit: 'px',
});

const theme = {
  contentMaxWidth: 1280,
  breakpoints,
  fonts,
  colors,
  fontWeights,
  lineHeights,
  fontSizes,
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  radii: [0, 3],
  typography,
};

export default theme;
