import Head from 'next/head';
import { NextPage } from 'next';
import { useTheme } from '@material-ui/core';

const Index: NextPage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <>Nothing to do here!</>
    </>
  );
};

export default Index;
