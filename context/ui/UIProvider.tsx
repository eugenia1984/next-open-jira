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

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar'})
   }

  return (
    <UIContext.Provider value={ {
      ...state,
      openSideMenu
    } }>
      { children }
    </UIContext.Provider>
  )
}