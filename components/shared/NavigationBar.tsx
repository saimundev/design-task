import BurgerIcon from "@/icons/BurgerIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import LinkdinIcon from "@/icons/LinkdinIcon";
import InstgramIcon from "@/icons/InstgramIcon";

type MenuItem = {
    id:number;
    name:string;
    link:string;
}
type NavigationProps = {
  menu: MenuItem[];
  isMenuOpen: boolean;
  setIsCategoriesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCategoriesOpen: boolean;
};
const NavigationBar = ({
  menu,
  isMenuOpen,
  setIsCategoriesOpen,
  setIsMenuOpen,
  isCategoriesOpen,
}: NavigationProps) => {
  return (
    <nav className="bg-green-dark border-t border-teal-700 text-white">
      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-9 py-3">
          <button
            className="flex items-center space-x-2  font-semibold"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <BurgerIcon className="w-4 h-3" />
            <span className="text-base font-normal">Browse By Category</span>
          </button>
          {menu.map((menuItem) => (
            <a
              key={menuItem.id}
              href={menuItem.link}
              className="text-white text-sm font-normal"
            >
              {menuItem.name}
            </a>
          ))}

          <div className="flex items-center space-x-6 ml-auto">
            <FacebookIcon className="w-3 h-5.5" />
            <TwitterIcon className="w-5.5 h-4.5" />
            <LinkdinIcon className="w-5.5 h-5.5" />
            <InstgramIcon className="w-5.5 h-5.5" />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3">
            <button
              className="flex items-center space-x-2 w-full text-left"
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            >
              <BurgerIcon className="h-3 w-3" />
              <span>Browse By Category</span>
            </button>
            <a href="#" className="block hover:text-teal-200 py-2">
              Home
            </a>
            <a href="#" className="block hover:text-teal-200 py-2">
              Easy Monthly Installments
            </a>
            <a href="#" className="block hover:text-teal-200 py-2">
              Shop by Brands
            </a>
            <a href="#" className="block hover:text-teal-200 py-2">
              Become a Vendor
            </a>
          </div>
        )}
      </div>

      {/* Categories Dropdown */}
      {isCategoriesOpen && (
        <div className="bg-white text-gray-800 shadow-lg absolute left-0 right-0 z-50 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            <div className="space-y-2">
              <h3 className="font-bold text-teal-800">Electronics</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Phones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Cameras
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-teal-800">Fashion</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Men's Wear
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Women's Wear
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-teal-800">Home & Garden</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Kitchen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Decor
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-teal-800">Sports</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600">
                    Shoes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
