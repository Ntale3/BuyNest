import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/ui/header'

const RootLayout = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Header/>
    <Outlet />
    <TanStackRouterDevtools />
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })