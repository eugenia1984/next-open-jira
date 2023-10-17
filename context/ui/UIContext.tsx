import { createContext } from 'react'

export interface ContextProps { 
  sideMenuOpen: boolean
  openSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps )