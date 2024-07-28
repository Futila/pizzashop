import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/react-query'

import './global.css'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
