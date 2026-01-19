import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { useAppStore } from '@/store/useAppStore';
import { type Product } from '@/types';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
    const { productId:id } = Route.useParams()
    const { products, addToCart } = useAppStore()
    console.log(products)

    const [mainImage, setMainImage] = useState<string>();
    const [productData, setProductData] = useState<Product>();

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        setProductData(product);
    }

    useEffect(() => {
        fetchProductData();
    }, [ products.length])
    console.log(productData)

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10 py-2">

    {productData && (<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden dark:bg-white bg-gray-500/20 mb-4">
                        <img
                            src={mainImage || productData.image[0]}
                            alt="alt"
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {productData.image.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg overflow-hidden dark:bg-white bg-gray-500/20"
                            >
                                <img
                                    src={image}
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div className="flex flex-col">
                    <h1 className="text-3xl font-medium text-foreground mb-4">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <img className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <img className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <img className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <img className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <img
                                className="h-4 w-4"
                                src={assets.star_dull_icon}
                                alt="star_dull_icon"
                            />
                        </div>
                        <p>(4.5)</p>
                    </div>
                    <p className="text-foreground mt-3">
                        {productData.description}
                    </p>
                    <p className="text-3xl font-medium mt-6">
                        ${productData.offerPrice}
                        <span className="text-base font-normal text-muted-foreground line-through ml-2">
                            ${productData.price}
                        </span>
                    </p>
                    <hr className="bg-border my-6" />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                <tr>
                                    <td className="text-foreground font-medium">Brand</td>
                                    <td className="text-muted-foreground ">Generic</td>
                                </tr>
                                <tr>
                                    <td className="text-foreground font-medium">Color</td>
                                    <td className="text-muted-foreground ">Multi</td>
                                </tr>
                                <tr>
                                    <td className="text-foreground font-medium">Category</td>
                                    <td className="text-muted-foreground">
                                        {productData.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center mt-10 gap-4">
                        <Button onClick={() => addToCart(productData._id)} className=" py-3.5  transition" variant={'default'}>
                            Add to Cart
                        </Button>
                        <Button onClick={() => { addToCart(productData._id);  }} className=" py-3.5" variant={'outline'}>
                            Buy now
                        </Button>
                    </div>
                </div>
            </div>) }
          </div>
  )
}
