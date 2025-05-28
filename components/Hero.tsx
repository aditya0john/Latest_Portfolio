"use client";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

function Hero() {
  const [isloading, setIsLoading] = useState(true);
  const words = useMemo(
    () => ["W E L C O M E", "I AM", "ADITYA JOHN", " "],
    []
  );
  const FrontEnd = useMemo(
    () => ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "React native"],
    []
  );
  const BackEnd = useMemo(
    () => ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase"],
    []
  );
  const BackgroundWords = useMemo(
    () => ["ADITYA", "JOHN", "ADITYA", "JOHN", "ADITYA", "JOHN"],
    []
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < words.length) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 3400);
      return () => clearInterval(interval);
    } else {
      setIsLoading(false);
    }
  }, [count]);

  return (
    <div className="relative ">
      <div className="flex items-center justify-center h-[38rem] bg-gradient-to-br from-[#FFF9F3] to-[#FFEFEB] bottomCurve">
        {count >= 4 && (
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
              x: -1000,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-black max-w-sm translate-x-6 hidden lg:flex flex-col gap-6"
          >
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="text-5xl/tight text-end font-extrabold noiseReverse bg-clip-text text-transparent"
                >
                  {FrontEnd[i]}
                </p>
              ))}
          </motion.span>
        )}
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
          className="rounded-full noise lg:overflow-hidden relative mx-10"
        >
          {count > 3 && (
            <Image
              src="/MEE.png"
              alt="My image"
              width={80}
              height={80}
              priority // ✅ Loads it earlier without layout shift
              placeholder="blur"
              blurDataURL="/blur-placeholder.png"
              className="relative z-50 lg:right-0 rounded-full h-[600px] w-[600px] object-cover -rotate-6 lg:hover:scale-[1.1] lg:hover:-rotate-2 transition duration-300"
            />
          )}

          {count >= 4 && (
            <div className="absolute flex flex-col justify-between inset-0 ">
              {Array.from({ length: 6 }).map((_, rowIndex) => {
                const isEven = rowIndex % 2 === 0;
                return (
                  <motion.div
                    key={rowIndex}
                    className={`flex  whitespace-nowrap rotate-[-45deg]`}
                    style={{
                      top: `${rowIndex * 18}vh`, // Spread 6 rows evenly
                    }}
                    animate={{
                      x: isEven ? ["0%", "-50%"] : ["-50%", "0%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: isEven ? 12 : 6,
                      ease: "linear",
                    }}
                  >
                    {Array(2)
                      .fill(null)
                      .flatMap((_, loopIndex) =>
                        BackgroundWords.map((word, i) => (
                          <span
                            key={`${i}-${loopIndex}`}
                            className={`text-5xl ${isEven ? "lg:text-[30px]" : "lg:text-[80px]"} noise bg-clip-text text-transparent font-extrabold uppercase flex items-center justify-center`}
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
                );
              })}
            </div>
          )}
        </motion.div>

        {count >= 4 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              x: 1000,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
              x: 0,
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-black max-w-sm translate-x-6 hidden lg:flex flex-col gap-6"
          >
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <p
                  key={i}
                  className="text-5xl/tight font-extrabold noise bg-clip-text text-transparent"
                >
                  {BackEnd[i]}
                </p>
              ))}
          </motion.div>
        )}

        <span className="absolute SecText">
          <p className="text-[3.5rem] lg:text-[8rem] font-serif capitalize">
            {words[count]}
          </p>
        </span>

        {count >= 3 && isloading && count < 4 && (
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
          <span className="z-50 absolute flex -top-[12px] left-2 bg-[#f28256] rounded-lg p-1">
            <div className="text-[3rem] lg:text-[3rem] font-serif capitalize text-black">
              AJ
            </div>
          </span>
        )}
      </div>
    </div>
  );
}

export default Hero;
