import { FC } from "react";
import { Data } from './models'
import { PageContextProvider } from './PageContext';
import { Header } from "./components";
import { TopBarAnnouncement } from "./components/TopBarAnnoucement";

type PageProps = {
    data: Data
}


const Page: FC<PageProps> = ({ data }) => {

    return <PageContextProvider data={data}>
        <TopBarAnnouncement />
        <Header />
    </PageContextProvider>

}
export { Page }