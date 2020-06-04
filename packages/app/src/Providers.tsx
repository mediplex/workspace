import React, { FC } from "react";
import { ThemeContextProvider } from '../src/ThemeContext';


const Providers: FC = ({ children }) => {
    return (
        <>
            <ThemeContextProvider>
                {children}
            </ThemeContextProvider>
        </>
    )
}

export { Providers }