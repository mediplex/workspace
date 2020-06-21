import { FC } from 'react'
import { State } from './State'
import { PageContextProvider } from './PageContext'
import { TopBar, Nav, ProductView } from './components'

type PageProps = {
  data: State
}

const Page: FC<PageProps> = ({ data }) => {
  return (
    <PageContextProvider data={data}>
      <TopBar />
      <Nav />
      <ProductView />
      <div
        style={{
          background: '#333',
          color: '#fff',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h2>{`Hurry, This FREE offer won't last long!`}</h2>
      </div>
      <div
        style={{
          height: '300vh',
        }}
      ></div>
    </PageContextProvider>
  )
}
export { Page }
