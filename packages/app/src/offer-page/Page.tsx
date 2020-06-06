import { FC } from 'react'
import { State } from './State'
import { PageContextProvider } from './PageContext'
import { Header } from './components'
import { TopBar } from './components/TopBar'

type PageProps = {
  data: State
}

const Page: FC<PageProps> = ({ data }) => {
  return (
    <PageContextProvider data={data}>
      <TopBar />
      <Header />
    </PageContextProvider>
  )
}
export { Page }
