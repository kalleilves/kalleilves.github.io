const withMDX = require('@next/mdx')();
const withOptimizedImages = require('next-optimized-images');
const withOffline = require('next-offline');

const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  handleImages: ['jpeg', 'png', 'svg'],
  images: {
    disableStaticImages: true,
  },
};

module.exports = withOffline(withOptimizedImages(withMDX(config)));
