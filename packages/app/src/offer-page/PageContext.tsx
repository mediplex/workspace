import React, { createContext, FC } from "react";
import { Data } from "./models";

const PageContext = createContext<Data | undefined>(undefined);

type PageContexProviderProps = {
    data: Data
}
const PageContextProvider: FC<PageContexProviderProps> = ({ children, data }) => {
    return (
        <PageContext.Provider value={data}>
            {children}
        </PageContext.Provider>
    );
};

export { PageContext, PageContextProvider };
