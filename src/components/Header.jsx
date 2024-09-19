import { nesrineLogo} from "../assets";
import { navigation } from '../constants';
import { useLocation } from "react-router-dom";
   // Adjust the path based on where Navbar is located.

const Header = () => {
  const { hash: pathnameHash } = useLocation();
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={nesrineLogo} width={190} height={40} alt= "brain"/>
        </a>

        <nav className="hidden lg:flex lg:items-center">
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <a 
              key={item.id} 
              href={item.url}
              className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathnameHash ? 'z-2 lg:text-white' : 'lg:text-white'}`}
              >
                {item.title}
              </a>
            ))}

          </div>
 

        </nav>

        
        </div>
    </div>
  )
}

export default Header;