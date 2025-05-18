"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function Hero() {
  const [isloading, setIsLoading] = useState(true);
  const words = useRef(["W E L C O M E", "I AM", "ADITYA JOHN", " "]);
  const BackgroundWords = [
    "ADITYA",
    "JOHN",
    "ADITYA",
    "JOHN",
    "ADITYA",
    "JOHN",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count <= words.current.length) {
      const timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 3400);
      return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    } else {
      setIsLoading(false);
    }
  }, [count]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-[38rem] bg-gradient-to-br from-[#FFF9F3] to-[#FFEFEB] bottomCurve">
        <motion.div
          animate={{
            height: [
              "220px",
              "220px",
              "220px",
              "220px",
              "220px",
              "220px",
              "600px",
            ],
            width: [
              "220px",
              "220px",
              "220px",
              "220px",
              "220px",
              "220px",
              "600px",
            ],
            x: [-300, 0, 0, 0, 0, 0, 0],
            y: [-100, 0, 0, 190, 180, 190, 0],
          }}
          transition={{
            duration: 13,
            times: [0, 0.15, 0.8, 0.84, 0.88, 0.95, 1], // Keyframe percentages
            ease: "easeInOut",
          }}
          className="rounded-full lg:bg-gradient-to-r from-[#DE8359] to-[#D86063] lg:overflow-hidden"
        >
          {count > 3 && (
            <Image
              src={"/dithered-ME.png"}
              alt="My image"
              height={80}
              width={80}
              className="relative z-50 lg:right-0 rounded-full h-[600px] w-[600px] object-cover -rotate-6 lg:hover:scale-[1.1] lg:hover:-rotate-2 transition duration-300"
            />
          )}
          {count > 4 && (
            <motion.div
              className="background absolute top-[25%] flex gap-0 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }} // Moves half-way, loops infinitely
              transition={{
                repeat: Infinity,
                duration: 16, // Adjust speed
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
                    BackgroundWords.map((word, i) => (
                      <span
                        key={`${i}-${loopIndex}`}
                        className="text-5xl lg:text-[300px] SecText font-extrabold uppercase flex items-center justify-center"
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
          )}
        </motion.div>

        <span className="absolute SecText">
          <p className="text-[3.5rem] lg:text-[8rem] font-serif capitalize">
            {words.current[count]}
          </p>
        </span>

        {count >= 3 && isloading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 0,
              x: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="logo-container gap-6 text-[3.5rem] lg:text-[8rem] font-serif capitalize SecText"
          >
            AJ
          </motion.div>
        )}
        {count >= 4 && (
          <span className="z-50 absolute flex -top-[12px] left-2 bg-black rounded-lg p-1">
            <div className="text-[3rem] lg:text-[3rem] font-serif capitalize text-white">
              AJ
            </div>
          </span>
        )}
      </div>
    </div>
  );
}

export default Hero;
