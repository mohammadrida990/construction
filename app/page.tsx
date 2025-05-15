"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Tests from "@/components/Tests";

import Topbar from "@/components/Topbar";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeHeader, setActiveHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveHeader(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Topbar />

      <div className="relative z-10">
        <Header />
      </div>

      <div
        className={`w-ful transition-transform duration-300 fixed top-0 left-0 z-50 ${
          activeHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>

      <Hero />

      <About />

      <Stats />

      <Services />

      <Work />

      <Tests />

      <Faq />

      <Contact />

      <Footer />
    </div>
  );
}
