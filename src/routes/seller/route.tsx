import Sidebar from '@/components/ui/seller/side-bar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/seller')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <div>
      {/* <Navbar /> */}
      <div className='flex w-full'>
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  )
}
