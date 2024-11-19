import React from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "Faqs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link href="/" className="hover:text-zinc-300">
            Mezzaluna Studio
          </Link>
        </div>

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

        <div>
          <Link
            href="#contact"
            className="hidden md:block bg-white text-zinc-900 py-2 px-6 rounded-lg hover:bg-zinc-200 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
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
    </header>
  );
}
