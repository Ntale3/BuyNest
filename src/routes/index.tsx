import Banner from '@/components/ui/banner'
import Footer from '@/components/ui/footer'
import Slider from '@/components/ui/header-slider'
import NewsLetter from '@/components/ui/news-letter'
import ProductCard from '@/components/ui/product-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="grid gap-4 px-6 md:px-16 lg:px-32">
      {/* <h3 className="text-red-500">Welcome Home!</h3> */}
      <Slider/>
      <ProductCard/>
      <Banner/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}