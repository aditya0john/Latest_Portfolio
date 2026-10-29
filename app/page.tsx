"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import About from "@/components/About";
import {
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/aceternity/resizable-navbar";

const sections = [
  { name: "ME", id: "TopPage" },
  { name: "About", id: "About" },
  { name: "Techstack", id: "TechStack" },
  { name: "Projects", id: "Projects" },
  { name: "Contact", id: "Contact" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<null | string>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isloading, setIsLoading] = useState(true);

  const navItems = sections.map((section) => ({
    name: section.name,
    link: `#${section.id}`,
  }));

  const navigateTo = (id: string) => {
    const index = sections.findIndex(
      (section) => section.id === id
    );

    if (index === -1) return;

    setActiveIndex(index);
    window.history.replaceState(null, "", `#${id}`);
  };

  const goToSection = (id: string) => {
    const index = sections.findIndex(
      (section) => section.id === id
    );

    if (index !== -1) {
      setActiveIndex(index);
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


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
    <main className="relative h-dvh w-full overflow-hidden">
      {/* Fixed navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Navbar>
          <NavBody>
            <NavbarLogo />

            <NavItems
              items={navItems.map((item) => ({
                ...item,
                // Keep the navbar links connected to
                // the horizontal navigation.
                onClick: () => goToSection(
                  item.link.slice(1)
                ),
              }))}
              onItemClick={navigateTo}
            />
          </NavBody>
        </Navbar>
      </div>


      {/* Horizontal page track */}
      <motion.div
        className="flex h-full w-full"
        animate={{
          x: `${-activeIndex * 100}vw`,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            ref={(el) => {
              sectionsRef.current[index] = el; // ✅ Assign the element
            }}
            data-section={section.name}
            className="relative h-dvh w-screen shrink-0 overflow-hidden"
            animate={{
              borderRadius: activeIndex === index ? "0px" : "36px",
              scale: activeIndex === index ? 1 : 0.94,
              y: activeIndex === index ? 0 : 12,
            }}
            style={{
              boxShadow:
                activeIndex === index
                  ? "0 0 0 rgba(0,0,0,0)"
                  : "0 16px 60px rgba(0,0,0,0.25)",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {activeSection === section.name && (
              <>
                {section.id === "TopPage" && <Hero />}
                {section.id === "About" && <About />}
                {section.id === "TechStack" && <TechStack />}
                {section.id === "Projects" && <Projects />}
                {section.id === "Contact" && <Contact />}
              </>
            )}
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}