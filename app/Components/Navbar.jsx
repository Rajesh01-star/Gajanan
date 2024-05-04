'use client'

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-40">
        <Link href="/">
          <img src="/logo.svg" className="h-8" alt="Logo" />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-500 hover:text-red-600 hover:border-red-600"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          isOpen ? "block" : "hidden"
        } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div
          className="text-md font-medium lg:flex-grow"
        >
          <Link
            href="/"
            passHref
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-red-600 mr-10"
          >
            Home
          </Link>
          <Link
            href="/about"
            passHref
            className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-gray-800 hover:text-red-600"
          >
            About
          </Link>
          <Link
            href="/services"
            passHref
            className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-gray-800 hover:text-red-600"
          >
            Service
          </Link>
          <Link
            href="/testimonials"
            passHref
            className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-gray-800 hover:text-red-600"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            passHref
            className="block mt-4 mr-10 lg:inline-block lg:mt-0 text-gray-800 hover:text-red-600"
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-md font-medium px-4 py-2 leading-none bg-gray-200 rounded mt-4 lg:mt-0"
          >
            <FaWhatsapp color="#ff5757" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
