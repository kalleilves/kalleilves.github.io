import NextLink from 'next/link';

import Link from './Link';

const InternalLink = ({ children, ...props }) => (
  <NextLink {...props} passHref>
    <Link>{children}</Link>
  </NextLink>
);

export default InternalLink;
