import {Card,CardContent,CardDescription} from "@/components/ui/card"
import { assets } from "@/assets/assets"
import { Button } from "./button"
const productCard = () => {

  return (
    <Card className="w-full flex flex-col grow items-start gap-0.5 max-w-50  cursor-pointer">
      <CardContent>
        <div className="cursor-pointer group relative rounded-lg w-full h-52 flex items-center justify-center">
          <img
          src={assets.sony}
          alt="Image"
          className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full p-2"
          width={800}
          height={800}
          />
        </div>
        <CardDescription>
         <p className="md:text-base font-medium pt-2 w-full truncate">Apple AirPods Pro</p>
        <p className="w-full text-xs max-sm:hidden truncate">Apple AirPods Pro </p>

        <div className="flex items-center gap-2">
          <p className="text-xs">{4.5}</p>
          {Array.from({ length: 5 }).map((_, index) => (
                        <img
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
        </div>

         <div className="flex items-center justify-between w-full mt-1">
                <p className="text-base font-medium">ugx 940000</p>
                <Button className=" max-sm:hidden px-4 py-1.5  text-xs transition">
                    Buy now
                </Button>
            </div>
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default productCard