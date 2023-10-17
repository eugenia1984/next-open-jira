import { FC, useReducer, ReactNode } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false
}

interface UIProviderProps { 
  children: ReactNode
}
export const UIProvider: FC<UIProviderProps> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  return (
    <UIContext.Provider value={ { sideMenuOpen: false } }>
      { children }
    </UIContext.Provider>
  )
}