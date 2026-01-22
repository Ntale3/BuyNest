import SideBar from '@/components/ui/seller/side-bar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/seller/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SideBar/>
    Hello "/seller/"!
    </div>
}
