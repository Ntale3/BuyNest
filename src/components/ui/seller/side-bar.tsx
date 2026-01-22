
import { assets } from "@/assets/assets";
import { Link, linkOptions } from "@tanstack/react-router";

const SideBar = () => {

    const options = linkOptions([
      {
        to: '/seller' ,
        label: 'Add Product',
        icon: assets.add_icon,
        activeOptions: { exact: true },
      },
      {
        to: '/seller/product-list' as string,
        label: "Product List",
        icon: assets.product_list_icon

      },
      {
        to: '/seller/orders' as string,
        label: "Orders",
        icon: assets.order_icon
      },

    ])

    return (
        <div className='md:w-64 w-16 border-r min-h-screen text-base border-border py-2 flex flex-col'>
          {options.map((option) => {
            return (
              <Link
                {...option}
                key={option.to}
                activeProps={{ className: `border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90` }}
                className="flex items-center py-3 px-4 gap-3 "
              >
              <img
                  src={option.icon}
                  alt={`${option.label.toLowerCase()}_icon`}
                  className="w-7 h-7"
              />
              <p className='md:block hidden text-center'>{option.label}</p>
              </Link>
            )
            })}

        </div>
    );
};

export default SideBar;
