import { useState } from "react";

function TestNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">MyLogo</div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(prev => !prev)}>
              {open ? "✖" : "☰"}
            </button>
          </div>

          {/* Menu */}
          <ul
            className={`flex justify-center items-center gap-x-6 ${
              open ? "flex" : "hidden md:flex"
            }`}
            onClick={() => setOpen(prev => !prev)} // toggle state on UL click
          >
            <li>
              <a
                href="#home"
                className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition duration-300 cursor-pointer hover:font-semibold"
              >
                Contact us
              </a>
            </li>
            <div>
              <button className="uppercase bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:from-blue-500 hover:to-cyan-400 transition duration-300">
                Coming soon
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TestNavbar;
