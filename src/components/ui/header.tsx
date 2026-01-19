import {assets} from "@/assets/assets"
import useSideBarStore from "@/store/navigation";
import { Link, linkOptions } from '@tanstack/react-router';
import { Menu, Search, User } from "lucide-react";
import Sidebar from "./sidebar";


const options = linkOptions([
  {
    to: '/' as string,
    label: 'Home',
    activeOptions: { exact: true },
  },
  {
    to: '/products' as string,
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
  const {open, toggleSideBar } = useSideBarStore()

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
              activeProps={{ className: `underline underline-offset-8 decoration-2 decoration-orange-800 font-bold` }}
              className="p-2 text-lg"
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

      <ol className="flex-row gap-2 flex md:hidden" onClick={toggleSideBar}>
        <li>
          <Menu/>
        </li>
      </ol>

    </div>
    {open&&<Sidebar/>}
   </nav>
  )
}

export default Header