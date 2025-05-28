"use client";

import { TextGenerateEffect } from "@/components/aceternity/text-generate";
import { useEffect, useRef, useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<null | string>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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
    <div>
      {isloading ? (
        <div className="h-screen flex items-center justify-center bg-black select-none">
          <div className="flex gap-1 items-end">
            <TextGenerateEffect
              words="R E D E S I G N"
              className="text-3xl lg:text-[10rem] font-bold capitalize text-white"
            />
            <TextGenerateEffect
              words="with me."
              className="text-lg lg:text-[3rem] font-bold text-white relative lg:-top-2"
              duration={2}
            />
          </div>
        </div>
      ) : (
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
          <section
            id="About"
            ref={(el) => {
              sectionsRef.current[1] = el; // ✅ Assign the element
            }}
            data-section="about"
            className="snap-start SecColor h-screen flex items-start lg:items-center justify-center"
          >
            {activeSection === "about" && <About />}
          </section>

          {/* TechStack Section */}
          <section
            id="TechStack"
            ref={(el) => {
              sectionsRef.current[2] = el; // ✅ Assign the element
            }}
            data-section="techstack"
            className="h-screen PrmColor snap-start flex items-center justify-center"
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
            className="snap-start SecColor h-screen flex items-center justify-center"
          >
            {activeSection === "projects" && <Projects />}
          </section>

          <section
            id="Contact"
            ref={(el) => {
              sectionsRef.current[4] = el; // ✅ Assign the element
            }}
            data-section="contact"
            className="snap-start PrmColor h-screen"
          >
            {activeSection === "contact" && <Contact />}
          </section>
        </div>
      )}
    </div>
  );
}
