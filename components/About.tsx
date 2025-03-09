import React from "react";
import { TextGenerateEffect } from "./aceternity/text-generate";
import { FlipWords } from "./aceternity/flipWords";
import { motion } from "framer-motion";

function About() {
  const words = ["better", "innovative", "beautiful", "modern"];

  return (
    <div className="lg:scale-100 flex flex-col gap-4 items-center overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center p-8 lg:max-w-7xl">
        <span className="text-4xl lg:text-6xl text-center font-extrabold text-neutral-300 z-50">
          Build
          <FlipWords
            words={words}
            className="uppercase text-orange-400 rounded-lg font-serif"
          />
          Together
        </span>

        <TextGenerateEffect
          className="text-white capitalize font-sans font-normal italic text-xl/6 lg:text-[35px]/snug text-justify tracking-tighter overflow-hidden"
          staggerdelay={0.1}
          duration={0.2}
          words=" Results-driven Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Passionate
          about building scalable web applications with optimized performance and seamless UI/UX. Strong back
          ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging,
           and deploying native cloud applications. Looking for a challenging role to contribute innovative
          solutions and drive impact in modern web development."
        />
      </div>

      <div className="overflow-hidden p-4 flex bg-orange-100/[0.2]">
        <motion.div
          className="flex gap-0 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Moves half-way, loops infinitely
          transition={{
            repeat: Infinity,
            duration: 10, // Adjust speed
            ease: "linear",
          }}
        >
          {Array(2) // Double for smooth looping
            .fill(null)
            .flatMap(
              (
                _,
                loopIndex // Add loopIndex to differentiate duplicates
              ) =>
                words.map((word, i) => (
                  <span
                    key={`${i}-${loopIndex}`}
                    className="text-6xl lg:text-8xl text-orange-500 font-extrabold uppercase font-serif flex items-center justify-center"
                  >
                    <span>{word}</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="4"
                        stroke="currentColor"
                        className="size-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </span>
                  </span>
                ))
            )}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
