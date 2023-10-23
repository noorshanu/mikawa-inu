import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bg py-4 ">
      <div className="container-wrapper mx-auto flex justify-between items-center relative z-20">
        {/* Logo */}
        <div className=""> <img src="images/logo.png" alt=""  className='w-auto h-14'/></div>

        {/* Mobile Menu Button */}
        <button
          className="text-white  uppercase  font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="nav-bg py-2 px-4 space-y-2 absolute right-[8%] top-[90%] bg-purple-600 mob-nav">
            <li>
              <a href="/" className="text-white  uppercase  font-medium hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="https://noodlefi.gitbook.io/docs/" target="_blank" className="text-white  uppercase  font-medium hover:text-pink-500">
              whitepaper
              </a>
            </li>
            <li>
              <a href="#road" className="text-whiite  uppercase  font-medium hover:text-pink-500">
               Roadmap
              </a>
            </li>
            <li>
              <a href="#token" className="text-white  uppercase  font-medium hover:text-pink-500">
              Tokonomics
              </a>
            </li>
            <li> <a href="https://nofi-dev.vercel.app/" target='_blank' className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink  px-8 py-3 rounded-full   hover:text-black">
                Launch App
              </a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-12">
            <li>
              <a href="/" className="text-white  uppercase font-medium hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="https://noodlefi.gitbook.io/docs/" target="_blank" className="text-white  uppercase  font-medium hover:text-pink-500">
               Whitepaper
              </a>
            </li>
            <li>
              <a href="#road" className="text-white  uppercase  font-medium hover:text-pink-500">
               Roadmap
              </a>
            </li>
            <li>
              <a href="#token" className="text-white  uppercase  font-medium    hover:text-pink-500">
                Tokonomics
              </a>
            </li>
            {/* #c61dba */}
            <li>
              <a href="https://nofi-dev.vercel.app/" target='_blank' className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-pink-500">
                Launch App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;