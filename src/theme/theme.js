import createBreakpoints from './createBreakpoints';
import createTypography from './createTypography';

const fonts = {
  main: "'Open sans', serif",
  heading: "'Noto Serif JP', serif",
};

const lightModeColors = {
  background: '#ffffff',
  divider: 'rgba(0, 0, 0, 0.1)',
  textHeading: 'rgba(0, 0, 0, 0.87)',
  textPrimary: 'rgba(0, 0, 0, 0.7)',
  textSecondary: 'rgba(0, 0, 0, .5)',
  primary: '#118ab2',
  primary50: '#e2f1f6',
};

const darkModeColors = {
  ...lightModeColors,
  background: '#1a1e1f',
  divider: 'rgba(255, 255, 255, 0.2)',
  textHeading: '#ffffff',
  textPrimary: 'rgba(255, 255, 255, 0.8)',
  textSecondary: 'rgba(0, 0, 0, .6)',
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

const createTheme = ({ colorMode = 'light' } = {}) => {
  const colors = colorMode === 'light' ? lightModeColors : darkModeColors;

  const typography = createTypography({
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  });

  return {
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
};

export default createTheme;
