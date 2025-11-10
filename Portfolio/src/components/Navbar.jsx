import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/images/logo.png"
const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <div className="shadow-[0_6px_8px_0_rgba(255,255,255,0.3)]
    bg-[linear-gradient(120deg,#0F0E0E,#313647)]
    px-4 py-2
    w-[100%]
    mx-0
    rounded-lg
    my-3
    flex justify-between items-center gap-x-4
    relative

   
    md:px-6
    md:w-[100%]
    md:mx-auto
    md:rounded-full
    md:text-1xl

 
    lg:px-10
    lg:w-[90%]
    lg:mx-auto">
      <div>
        <img src={logo} alt="logo" className="w-10 h-10 rounded-3xl" />
      </div>

      {/* Desktop & Mobile Menu */}
      <nav className="md:flex">
        <ul
          className={`flex justify-center items-start  gap-y-6 md:gap-x-6 md:flex ${
            open
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#0F0E0E] p-4 rounded-lg md:static md:flex-row md:bg-transparent md:p-0"
              : "hidden md:flex"
          }`}
        >
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold">
              Contact us
            </a>
          </li>
          <li>
            <button className="uppercase bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:from-blue-500 hover:to-cyan-400 transition duration-300">
              Coming soon
            </button>
          </li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setopen(prev => !prev)}>
          {open ? <RxCross2 className="h-6 w-6 text-white" /> : <GiHamburgerMenu className="h-6 w-6 text-white" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
