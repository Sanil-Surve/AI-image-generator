import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Title */}
        <div className="text-2xl font-bold">
          <Link to="/">AI Image Generator</Link>
        </div>

        {/* Nav Links for Large Screens */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-blue-800"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;