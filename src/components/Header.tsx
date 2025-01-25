"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          HomeoCare
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-green-600 md:bg-transparent z-10`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link href="/" className="block py-2 md:py-0 hover:text-green-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 md:py-0 hover:text-green-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 md:py-0 hover:text-green-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/homeoCare" className="block py-2 md:py-0 hover:text-green-200">
                Homeo Care
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}