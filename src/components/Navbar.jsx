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

        <Link href="/" className="flex items-center">
          <img
            src="/shaila_logo-260-beyaz.png"
            alt="Shaila Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-lg font-bold">Shaila GmbH</span>
        </Link>

        {/* Right Side*/}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:underline">
            Über uns
          </Link>
          <Link href="/products" className="hover:underline">
            Produkte
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Kontakt
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
        <div
          className={`absolute right-0 w-full md:hidden bg-gray-700 z-10 transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {" "}
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Über uns
          </Link>
          <Link
            href="/products"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Produkte
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
