import { MDXProvider as Provider } from '@mdx-js/react';

import Typography from './Typography';
import Link from './Link';

const P = (props) => <Typography gutterBottom {...props} />;

const H1 = (props) => (
  <Typography variant="h3" as="h1" gutterBottom {...props} />
);

const H2 = (props) => (
  <Typography variant="h4" as="h2" gutterBottom {...props} />
);

const H3 = (props) => (
  <Typography variant="h5" as="h3" gutterBottom {...props} />
);

const A = (props) => <Link blank {...props} />;

const components = {
  p: P,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
};

const MDXProvider = (props) => <Provider components={components} {...props} />;

export default MDXProvider;
