const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

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
