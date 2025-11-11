import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <>
    <div  className=" md:sticky top-0 z-50
    shadow-[0_6px_8px_0_rgba(255,255,255,0.2)]
   
    px-4 py-2
    w-[100%]
    mx-0

 
    flex justify-between items-center gap-x-4
    relative

    md:px-6
    md:w-[100%]
    md:mx-auto
   
    md:text-1xl
 
    
    lg:px-20

   ">
      <div>
        {/* <img src={logo} alt="logo" className="w-12 h-12 rounded-3xl" /> */}
        <h2 className="capitalize  py-2 
        text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-300 bg-clip-text text-transparent
       ">Port<span className="text-cyan-400 cursor-pointer ">folio</span> </h2>
      </div>

      {/* Desktop & Mobile Menu */}
      <nav className="md:flex">
        <ul
          className={`flex justify-center items-start md:items-center lg:items-center   gap-y-6 md:gap-x-6 md:flex ${
            open
              ? "flex flex-col absolute top-16 left-0 w-full bg-[#0F0E0E] p-4 rounded-lg md:static md:flex-row md:bg-transparent md:p-0"
              : "hidden md:flex"
          }`}
        >
          <li>
            <a href="#" className="text-cyan-400 transition duration-500 text-sm font-semibold 
            relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]  hover:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 py-2 cursor-pointer ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-500 text-sm  font-semibold
            relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]  hover:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 py-2 cursor-pointer ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-500 font-semibold
            relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]  hover:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 py-2 cursor-pointer ">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-500 text-sm font-semibold
             relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]  hover:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 py-2 cursor-pointer ">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition duration-500 text-sm font-semibold
            relative  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]  hover:after:bg-cyan-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 py-2 cursor-pointer ">
              Contact us
            </a>
          </li>
          <li>
           <button className="capitalize bg-gradient-to-r from-red-400 to-blue-400 text-white hover:text-white font-semibold px-6 py-2 rounded-lg hover:from-red-700 hover:to-cyan-500 transition duration-300 ms-0 md:ms-6 lg:ms-12 ">
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
   
    </>
  );
};

export default Navbar;
