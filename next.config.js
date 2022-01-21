const withMDX = require('@next/mdx')();
const withOptimizedImages = require('next-optimized-images');

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  handleImages: ['jpeg', 'png', 'svg'],
  images: {
    disableStaticImages: true,
  },
};

module.exports = withOptimizedImages(withMDX(config));
