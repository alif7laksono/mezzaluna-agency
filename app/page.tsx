import React from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
