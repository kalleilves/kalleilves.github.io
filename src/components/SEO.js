import Head from 'next/head';

import { TITLE, DESCRIPTION, AUTHOR } from '../config';

const SEO = ({ title = TITLE, description = DESCRIPTION, author = AUTHOR }) => {
  const meta = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  return (
    <Head>
      <title>{title}</title>

      {meta.map((metaProps) => (
        <meta key={metaProps.name ?? metaProps.property} {...metaProps} />
      ))}
    </Head>
  );
};

export default SEO;
