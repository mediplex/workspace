import Head from 'next/head'
import { NextPage, GetServerSideProps } from 'next'
import { useTheme } from '@material-ui/core'

import {
  Page as OfferPage,
  State as OfferPageData
} from '../src/offer-page'

type IndexProps = {
  data: OfferPageData
}

const Index: NextPage<IndexProps> = ({ data }): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <OfferPage data={data} />
    </>

  )
}

const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const data: OfferPageData = await import('../src/offer-page/sampleData')
    .then(({ data }) => data)

  return {
    props: {
      data
    }
  }
}

export { getServerSideProps }
export default Index
