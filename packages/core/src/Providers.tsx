import React, { FC } from 'react'
import { ThemeContextProvider } from './ThemeContext'

const Providers: FC = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  )
}

export { Providers }
