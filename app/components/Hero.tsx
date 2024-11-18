import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 py-16 z-40 bg-zinc-950">
      <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-4 text-white">
          Elevate Your Online Presence with Mezzaluna Studio
        </h1>
        <p className="text-xl md:text-md m-5 p-5 text-gray-500">
          We specialize in creating high-performance, visually stunning websites
          tailored to your business needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            href="#contact"
            className="bg-white text-zinc-900 py-3 px-8 rounded-lg text-lg hover:bg-zinc-100 transition duration-300 transform"
          >
            Get Started
          </Link>
          <Link
            href="#projects"
            className="bg-transparent border-2 border-zinc-800 text-white py-3 px-8 rounded-lg text-lg hover:bg-zinc-800 transition duration-300 transform"
          >
            Our Works
          </Link>
        </div>
      </div>
    </section>
  );
}
