import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <img alt="logo" src={Logo} />

            {/* Right side - Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 focus:outline-none">
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars2Icon className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>  
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-gray-100 p-6 shadow-md">
          <ul className="space-y-4">
            <li><a href="#" className="text-lg font-medium">Home</a></li>
            <li><a href="#" className="text-lg font-medium">About</a></li>
            <li><a href="#" className="text-lg font-medium">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

