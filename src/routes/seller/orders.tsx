import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/seller/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/seller/orders"!</div>
}
