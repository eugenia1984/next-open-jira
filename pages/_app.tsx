import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme, darkTheme } from '../themes'
import { UIProvider } from '../context/ui'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UIProvider >
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        <Component { ...pageProps } />
      </ThemeProvider>
    </UIProvider>
  )
}

export default App
