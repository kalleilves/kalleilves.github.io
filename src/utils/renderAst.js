import React from 'react';
import RehypeReact from 'rehype-react';

import Typography from '../components/Typography';
import Anchor from '../components/Anchor';

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

const partials = {
  p: P,
  a: Anchor,
  h1: H1,
  h2: H2,
  h3: H3,
};

const compiler = new RehypeReact({
  createElement: React.createElement,
  components: partials,
}).Compiler;

const renderAst = (ast) => compiler(ast);

export default renderAst;
