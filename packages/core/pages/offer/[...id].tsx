import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import { useTheme } from '@material-ui/core';

import {
  Page as OfferPage,
  State as OfferPageData,
} from 'offer-page';

type IndexProps = {
  data: OfferPageData;
};

const Index: NextPage<IndexProps> = ({ data }): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <OfferPage data={data} />
    </>
  );
};

const getServerSideProps: GetServerSideProps<IndexProps> = async ({
  query,
}) => {
  const { id } = query;
  const data: OfferPageData = await import(
    '../../../offer-page/sampleData'
  ).then(({ data }) => data[id as string]);

  return {
    props: {
      data,
    },
  };
};

export { getServerSideProps };
export default Index;
