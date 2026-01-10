import {assets} from "@/assets/assets"
import { Link, linkOptions } from '@tanstack/react-router';
import { Menu, Search, User } from "lucide-react";


const options = linkOptions([
  {
    to: '/home' as string,
    label: 'Home',
    activeOptions: { exact: true },
  },
  {
    to: '/shop' as string,
    label: 'Shop',
  },
  {
    to: '/about' as string,
    label: 'About',
  },
  {
    to:'/contact' as string,
    label:'Contact'
  },
  {
    to:'/cart' as string,
    label:'Cart'
  }
])

const Header = () => {
  return (
   <nav className="flex justify-between items-center align-center gap-4 p-8 ">
    <div>
      <img src={assets.logo}/>
    </div>

    <div className="hidden md:flex">
    {options.map((option) => {
          return (
            <Link
              {...option}
              key={option.to}
              activeProps={{ className: `border-b border-orange-800 text-bold text-lg md:text-md text-orange-400` }}
              className="p-2"
            >
              {option.label}
            </Link>
          )
        })}

    </div>

    <div className="">
      <ol className="flex-row gap-2 hidden md:flex" >
        <li><Search width={24} height={24}/></li>
        <li className="flex justify-center">
          <User width={24} height={24}/>
        </li>
      </ol>

      <ol className="flex-row gap-2 flex md:hidden">
        <li>
          <Menu/>
        </li>
      </ol>

    </div>
   </nav>
  )
}

export default Header