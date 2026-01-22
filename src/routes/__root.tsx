import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'

const RootLayout = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <Header/>
    <Outlet />
    <Footer/>
    <TanStackRouterDevtools />
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })