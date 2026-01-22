"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import { projects } from "@/data";
import CardSwap, { Card } from "@/components/ReactBits/CardSwap";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isloading, setIsLoading] = useState(true);
  const [itemData, setItemData] = useState(1);
  const [count, setCount] = useState(0);

  const words = useMemo(
    () => ["W E L C O M E", "I AM", "Aditya John", " "],
    []
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count < words.length) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 2400);
      return () => clearInterval(interval);
    }
  }, [count, words.length]);

  useEffect(() => {
    if (isloading) return; // Prevent observer from initializing while loading

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Triggers when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isloading]); // Only runs once when loading completes


  return (
    <div className="h-screen w-full overflow-x-hidden overflow-y-auto snap-y snap-mandatory select-none background">
      {/* Hero Section */}
      <section
        id="TopPage"
        ref={(el) => {
          sectionsRef.current[0] = el; // ✅ Assign the element
        }}
        data-section="hero"
        className="h-screen snap-start SecColor"
      >
        {activeSection === "hero" && <Hero />}
      </section>

      {/* About Section */}
      {/* <section
        id="About"
        ref={(el) => {
          sectionsRef.current[1] = el; // ✅ Assign the element
        }}
        data-section="about"
        className="snap-start SecColor h-screen flex items-start lg:items-center justify-center relative"
      >
        {activeSection === "about" && <About />}
      </section> */}

      {/* TechStack Section */}
      <section
        id="TechStack"
        ref={(el) => {
          sectionsRef.current[2] = el; // ✅ Assign the element
        }}
        data-section="techstack"
        className="h-screen SecColor snap-start flex items-center justify-center"
      >
        {activeSection === "techstack" && <TechStack />}
      </section>

      {/* Projects Section */}
      <section
        id="Projects"
        ref={(el) => {
          sectionsRef.current[3] = el; // ✅ Assign the element
        }}
        data-section="projects"
        className="snap-start SecColor h-screen flex items-center justify-center relative overflow-hidden"
      >
        {activeSection === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="w-full h-full flex flex-col justify-center"
          >
            {activeSection === "projects" && <Projects />}
          </motion.div>
        )}
      </section>

      <section
        id="Contact"
        ref={(el) => {
          sectionsRef.current[4] = el; // ✅ Assign the element
        }}
        data-section="contact"
        className="snap-start SecColor h-screen"
      >
        {activeSection === "contact" && <Contact />}
      </section>
    </div>
  );
}
