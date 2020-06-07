import { FC } from 'react'
import { State } from './State'
import { PageContextProvider } from './PageContext'
import { TopBar, Nav, Announcement } from './components'

type PageProps = {
  data: State
}

const Page: FC<PageProps> = ({ data }) => {
  return (
    <PageContextProvider data={data}>
      <TopBar />
      <Nav />
      <Announcement />
    </PageContextProvider>
  )
}
export { Page }
