import { FC } from 'react'
import { State } from './State'
import { PageContextProvider } from './PageContext'
import { TopBar, Nav, Announcement, ProductView } from './components'

type PageProps = {
  data: State
}

const Page: FC<PageProps> = ({ data }) => {
  return (
    <PageContextProvider data={data}>
      <TopBar />
      <Nav />
      <Announcement />
      <ProductView />
      <div
        style={{
          background: '#333',
          color: '#fff',
          padding: '4rem',
          textAlign: 'center',
        }}
      >
        <h2>{`Hurry, This FREE offer won't last long!`}</h2>
      </div>
    </PageContextProvider>
  )
}
export { Page }
