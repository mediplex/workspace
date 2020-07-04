import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import Error from 'next/error';
import { useTheme } from '@material-ui/core';

import { Page as OfferPage, State as OfferPageData } from '../src/offer-page';

type IndexProps = {
  data: OfferPageData;
  errorCode: number;
  intl: {
    locale: string;
    messages: Record<string, string>;
  };
};

const Index: NextPage<IndexProps> = ({ data, intl, errorCode }): JSX.Element => {
  const theme = useTheme();

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <OfferPage data={data} intl={intl} />
    </>
  );
};

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { path } = query;
  const id = (path as string).split('/')[0];

  const data: OfferPageData | null = await import('../src/offer-page/sampleData').then(({ data }) =>
    data[id as string] ? data[id as string] : null
  );

  const defaultLocal = 'en';

  const { appMessages } = await import('../src/offer-page/sampleData');
  const messages = { ...flattenMessages(data), appMessages };

  // const errorCode = res.ok ? false : res.statusCode
  const errorCode = data ? false : 404;
  return {
    props: {
      data,
      intl: {
        locale: defaultLocal,
        messages,
      },
      errorCode,
    },
  };
};

export { getServerSideProps };
export default Index;

/**
 * Util function to be used to flatted objects to be used as messages by react-intl
 * Resource: https://formatjs.io/docs/react-intl/upgrade-guide-2x/#flatten-messages-object
 * @param nestedMessages
 * @param prefix
 */
const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      messages[prefixedKey] = value;
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }
    return messages;
  }, {});
};
