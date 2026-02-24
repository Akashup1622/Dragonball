import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
      return(
        <nav className="w-full h-20 z-50  bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔸 Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwKEHprgx9u8uGMyXGQX95jxb2F5p1s7NIQ&s"
            alt="Logo"
            className="w-12 h-12 rounded-full border-2 border-yellow-400 shadow-[0_0_10px_#facc15]"
          />
          <h1 className="text-2xl text-white font-extrabold hover:text-yellow-400 transition duration-300 tracking-wide">
            Dragonball
          </h1>
        </div>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-semibold text-gray-200">
          <Link
            to="/"
            className="relative hover:text-yellow-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300"
          >
            Home
          </Link>
          <Link
            to="/planets"
            className="relative hover:text-yellow-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300"
          >
            Planets
          </Link>
          <Link
            to="/character"
            className="relative hover:text-yellow-400 transition duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300"
          >
            Characters
          </Link>
        </div>

        {/* 🔸 Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 h-1 bg-yellow-400 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-yellow-400 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-8 h-1 bg-yellow-400 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-yellow-400 flex flex-col items-center gap-4 py-5 text-lg font-medium text-gray-300">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/planets"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Planets
          </Link>
          <Link
            to="/character"
            onClick={() => setIsOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Characters
          </Link>
        </div>
      )}
    </nav>   
    )
   
};

export default Navbar;
