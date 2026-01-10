import Slider from '@/components/ui/header-slider'
import ProductCard from '@/components/ui/product-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="grid gap-4 px-2">
      {/* <h3 className="text-red-500">Welcome Home!</h3> */}
      <Slider/>
      <ProductCard/>
    </div>
  )
}