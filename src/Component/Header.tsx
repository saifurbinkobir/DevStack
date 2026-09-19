import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <div className="border-b border-[#F1F5F9]">
      <div className="flex justify-between items-center px-3 md:px-0 py-2.5 container mx-auto">
        {/* Humberger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            <CiMenuBurger />
          </button>
        </div>
        {/* Logo Area */}
        <div className="ml-6 md:ml-0">
          <a href="#">
            <img src="/src/assets/logo-text.png" alt="DevStack" />
          </a>
        </div>
        {/* Menu Area */}
        <div className="hidden md:block">
          <ul className="flex gap-6 text-[#475569] font-medium">
            <li>
              <a href="#" className="text-[#DB2777]">
                Home
              </a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* Button Area */}
        <div className="flex gap-4 items-center">
          <a href="#" className="text-[#334155]">
            Sign In
          </a>
          <a
            href="#"
            className="rounded-[30px] bg-[#D91B7E] py-2.5 px-5 text-white"
          >
            Sign Up
          </a>
        </div>
      </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
      <div className="md:hidden px-3 pb-4 absolute bg-white w-full">
        <ul className="flex flex-col gap-3 text-[#475569] font-medium">
          <li><a href="#" className="text-[#DB2777]">Home</a></li>
          <li><a href="#">Technologies</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    )}

    </div>
  );
};

export default Header;
