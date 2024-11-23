"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "Faqs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/" className="hover:text-zinc-300">
            Mezzaluna Studio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-md text-gray-400">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-white transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Get Started Button */}
        <div>
          <Link
            href="#contact"
            className="hidden md:block bg-white text-zinc-900 py-2 px-6 rounded-lg hover:bg-zinc-200 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-zinc-900 text-gray-400">
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking
                  className="block text-white py-2 px-4 rounded hover:bg-zinc-800 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking
                className="block bg-stone-700 text-white py-2 px-4 text-center rounded-lg hover:bg-stone-800 transition duration-300"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
