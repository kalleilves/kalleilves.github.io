import createBreakpoints from './createBreakpoints';
import createTypography from './createTypography';

const fonts = {
  main: "'Open sans', serif",
  heading: "'Noto Serif JP', serif",
};

const colors = {
  background: 'var(--color-background)',
  divider: 'var(--color-divider)',
  textHeading: 'var(--color-text-heading)',
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  primary: 'var(--color-primary)',
  primaryA10: 'var(--color-primary-a10)',
  primaryA30: 'var(--color-primary-a30)',
  primaryContrastText: 'var(--color-primary-contrast-text)',
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

const typography = createTypography({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
});

const theme = {
  contentMaxWidth: '1280px',
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
