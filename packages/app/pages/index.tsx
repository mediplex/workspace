import Head from 'next/head'
import { NextPage } from 'next'
import { useTheme, Button } from '@material-ui/core'

export const Index: NextPage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <Button variant='contained'>Click Me!</Button>
    </>

  )
}

export default Index
