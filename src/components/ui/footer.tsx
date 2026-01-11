import { assets } from "@/assets/assets";
import { Link, linkOptions } from "@tanstack/react-router";

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

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-border text-muted-foreground">
        <div className="w-4/5">
          <img className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-muted-foreground mb-5">Company</h2>
            {options.map((option) => {
                      return (
                        <Link
                          {...option}
                          key={option.to}
                          activeProps={{ className: `underline underline-offset-4 decoration-2 decoration-orange-800 font-semibold` }}
                          className="text-muted-foreground flex flex-col"
                        >
                          {option.label}
                        </Link>
                      )
                    })}
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-muted-foreground mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+256 76 9010 507</p>
              <p>swamaduntale98@gmail.com</p>
              <p>contact@Ntale Swamadu</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright {new Date().getFullYear()} © GreatStack.dev All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;