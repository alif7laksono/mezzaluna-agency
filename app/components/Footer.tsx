"use client";
import React from "react";
import { useInViewAnimation } from "@/app/hooks/useInViewAnimation";
import { FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";

const socials = [
  {
    href: "https://instagram.com",
    icon: <FaInstagram size={18} />,
    label: "Instagram",
  },
  {
    href: "mailto:mezzalunastudio9@gmail.com",
    icon: <FaEnvelope size={18} />,
    label: "Email",
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter size={18} />,
    label: "Twitter",
  },
];

export default function Footer() {
  const { ref, isVisible } = useInViewAnimation();
  return (
    <footer
      ref={ref}
      className={`w-full bg-zinc-950 text-gray-400 py-6 border-t border-zinc-800 ${
        isVisible ? "opacity-100 animate-slideUp" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Mezzaluna Studio. All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
