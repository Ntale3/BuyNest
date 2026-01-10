import useSideBarStore from "@/store/navigation"
import { Link, linkOptions } from "@tanstack/react-router"

const options = linkOptions([
  {
    to: '/' as string,
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
const Sidebar = () => {
const {toggleSideBar} = useSideBarStore()
  return (
    <aside className="fixed top-0 right-0 z-40 w-64 h-full transition-transform  md:hidden">
      <div className="h-full px-3 py-4 overflow-y-auto bg-sidebar border-e border-default flex flex-col">
        {options.map((option) => {
                  return (
                    <Link
                      {...option}
                      key={option.to}
                      activeProps={{ className: `underline underline-offset-8 decoration-2 decoration-orange-800` }}
                      className="p-2 text-lg space-y-2 font-medium"
                      onClick={toggleSideBar}
                    >
                      {option.label}
                    </Link>
                  )
                })}
      </div>
    </aside>
  )
}

export default Sidebar