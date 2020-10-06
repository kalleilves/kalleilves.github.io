const createTypography = ({
  colors,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights,
}) => {
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

  return {
    body: baseTypography,
    caption: {
      ...baseTypography,
      fontSize: '0.9rem',
      color: colors.textSecondary,
    },
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
};

export default createTypography;
