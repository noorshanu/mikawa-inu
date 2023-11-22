import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import {BsInstagram, BsTwitter} from 'react-icons/bs'

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bg py-4 ">
      <div className="container-wrapper mx-auto flex justify-between items-center relative z-20">
        {/* Logo */}
        <div className="">
          {" "}
          <img src="images/logo.png" alt="" className="w-auto h-14" />
        </div>

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
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="nav-bg py-2 px-4 space-y-2 absolute right-[8%] top-[90%] bg-purple-600 mob-nav">
            <li>
              <a
                href="/"
                className="text-white  uppercase  font-medium hover:text-pink-500 font-monot"
              >
                Home
              </a>
            </li>
      
            <li>
              <a
                   href="https://coinsult.net/projects/mikawa/" target="_blank"
                className="text-whiite  uppercase  font-medium hover:text-pink-500"
              >
               Audit
              </a>
            </li>
            <li>
              <a
                href="https://github.com/solidproof/projects/blob/main/2023/Mikawa%20/KYC_Certificate_Mikawa.png" target="_blank"
                className="text-white  uppercase  font-medium hover:text-pink-500"
              >
                KYC Certficate
              </a>
            </li>
            <li>
              <a
              href="https://www.pinksale.finance/launchpad/0x54A2B435Eddb14f505C8c7D65Cd45FB9fF520655?chain=BSC&refId=0x1329bC366a13df5c4D6005a9b7856591203fD162" target="_blank"
                className="text-white  uppercase  font-medium hover:text-pink-500"
              >
                Pinksale
              </a>
            </li>
            <li>
              <a
                href="#token"
                className="text-white  uppercase  font-medium hover:text-pink-500"
              >
                Tokenomic
              </a>
            </li>{" "}
            <li>
              <a
                href="#road"
                className="text-white  uppercase  font-medium hover:text-pink-500"
              >
                Roadmap
              </a>
            </li>
            <li className="flex items-center gap-4 ">
              <a
                href="https://t.me/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                <FaTelegram className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                {" "}
                <BsTwitter className=" text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                <BsInstagram className=" text-2xl" />
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-12">
            <li>
              <a
                href="/"
                className="text-white  uppercase font-medium hover:text-pink-500 font-monot"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://coinsult.net/projects/mikawa/" target="_blank"
               
                className="text-white  uppercase  font-medium hover:text-pink-500 font-monot"
              >
                Audit
              </a>
            </li>
            <li>
              <a
                href="https://github.com/solidproof/projects/blob/main/2023/Mikawa%20/KYC_Certificate_Mikawa.png" target="_blank"
                className="text-white  uppercase  font-medium hover:text-pink-500 font-monot"
              >
                KYC Certificate
              </a>
            </li>
            <li>
              <a
                href="https://www.pinksale.finance/launchpad/0x54A2B435Eddb14f505C8c7D65Cd45FB9fF520655?chain=BSC&refId=0x1329bC366a13df5c4D6005a9b7856591203fD162" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                Pinksale
              </a>
            </li>

            <li>
              <a
                href="#token"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                Tokenomic
              </a>
            </li>

            <li>
              <a
                href="#road"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                Road Map
              </a>
            </li>
            <li className="flex items-center gap-4 ">
              <a
                href="https://t.me/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                <FaTelegram className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                {" "}
                <BsTwitter className=" text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/mikawainuvip" target="_blank"
                className="text-white  uppercase  font-medium    hover:text-pink-500 font-monot"
              >
                <BsInstagram className=" text-2xl" />
              </a>
            </li>
            {/* #c61dba */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
