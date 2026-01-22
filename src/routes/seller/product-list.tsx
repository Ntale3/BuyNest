import { assets, productsDummyData } from '@/assets/assets'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/seller/product-list')({
  component: RouteComponent,
})

function RouteComponent() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchSellerProduct = async () => {
    setProducts(productsDummyData)
    setLoading(false)
  }

  useEffect(() => {
    fetchSellerProduct();
  }, [])
  return (
   <div className="flex-1 min-h-screen flex flex-col justify-between">
      {loading ? (<h1>Loading .....</h1>): <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Product</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-background border border-border">
          <table className=" table-fixed w-full overflow-hidden">
            <thead className="text-foreground text-sm text-left">
              <tr>
                <th className="w-2/3 md:w-2/5 px-4 py-3 font-medium truncate">Product</th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">Category</th>
                <th className="px-4 py-3 font-medium truncate">
                  Price
                </th>
                <th className="px-4 py-3 font-medium truncate max-sm:hidden">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-foreground">
              {products.map((product, index) => (
                <tr key={index} className="border-t border-border">
                  <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                    <div className="bg-card rounded p-2">
                      <img
                        src={product.image[0]}
                        alt="product Image"
                        className="w-16"
                        width={1280}
                        height={720}
                      />
                    </div>
                    <span className="truncate w-full">
                      {product.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-sm:hidden">{product.category}</td>
                  <td className="px-4 py-3">${product.offerPrice}</td>
                  <td className="px-4 py-3 max-sm:hidden">
                    <Button>
                      <span className="hidden md:block">Visit</span>
                      <img
                        className="h-3.5"
                        src={assets.redirect_icon}
                        alt="redirect_icon"
                      />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>}
       {/* <Footer /> */}
    </div>
  )
}
