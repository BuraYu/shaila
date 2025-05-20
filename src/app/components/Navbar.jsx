"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Left Side */}
        <div className="flex items-center">
          <img
            src="/shaila_logo-260-beyaz.png"
            alt="Shaila Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold">Shaila GmbH</span>
        </div>

        {/* Right Side*/}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:underline">
            About Us
          </Link>
          <Link href="#products" className="hover:underline">
            Products
          </Link>
          <Link href="#blog" className="hover:underline">
            Blog
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile screen */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-0 w-full md:hidden bg-gray-700">
          <Link
            href="#about"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="#products"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#blog"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
