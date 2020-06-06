import React, { createContext, FC, useReducer, useCallback } from 'react'
import { State } from './State'

type PageContexProviderProps = {
  data: State
}

type ActionType = '[TOPBAR] SET_VISIBLE'

type Action = {
  type: ActionType
  payload: { visible: boolean }
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case '[TOPBAR] SET_VISIBLE':
      return { ...state, topBar: { ...state.topBar, ...action.payload } }

    default:
      throw new Error()
  }
}

type PageContextType = {
  state: State
  setTopBarVisibility: () => void
}
const PageContext = createContext<PageContextType | undefined>(undefined)

const PageContextProvider: FC<PageContexProviderProps> = ({
  children,
  data,
}) => {
  const [state, dispatch] = useReducer(reducer, data)

  const setTopBarVisibility = useCallback(() => {
    dispatch({
      type: '[TOPBAR] SET_VISIBLE',
      payload: { visible: !state.topBar.visible },
    })
  }, [])

  return (
    <PageContext.Provider
      value={{
        state,
        setTopBarVisibility,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export { PageContext, PageContextProvider }
