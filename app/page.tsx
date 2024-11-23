import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-gray-300 antialiased scroll-smooth`}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
