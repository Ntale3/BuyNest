import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/seller/product-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/seller/product-list"!</div>
}
