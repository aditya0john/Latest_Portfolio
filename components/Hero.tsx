"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import TextType from "./ReactBits/TextType";
import DownloadButtons from "./DownloadButtons";
import MyPic from "../public/images/ME2.png"
import Link from "next/link";

function Hero() {
  const words = useMemo(
    () => ["W E L C O M E", "I AM", "Aditya John", ""],
    []
  );

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (count < words.length) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1600);
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [count, words.length]);

  return (
    <div className={`h-screen p-2 md:p-0 flex flex-col items-center justify-center ${loading ? "gap-0" : "gap-4"} `}>
      {loading &&
        <motion.div
          animate={{
            height: ["50vh", "50vh", "50vh", "0vh"],
            width: ["30vw", "30vw", "30vw", "0vw"],
            borderRadius: ["50%", "50%", "50%", "50%"],
            x: [-300, 0, 0, 0],
            y: [-100, 0, 0, 0],
          }}
          transition={{
            duration: 6,
            times: [0, 0.25, 0.95, 1],
            ease: "easeInOut",
          }}
          className={`bg-white backdrop-invert overflow-hidden flex flex-col items-center justify-center`}
        />}

      {count > 3 &&
        <div className="flex flex-col items-center justify-center">
          <span className="text-white text-4xl md:text-7xl lg:text-[8rem] font-serif">
            ADITYA JOHN
          </span>
        </div>
      }

      {count > 3 &&
        <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-center gap-4 w-full p-4">
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
            className="text-black translate-x-6 bg-gradient-to-b from-white/70 to bg-neutral-900 p-4 rounded-[42] flex items-center h-full"
          >
            <span className="bg-black p-4 rounded-[32] h-full w-full flex items-center justify-center">
              <TextType
                text="Results-driven Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Passionate about building scalable web applications with optimized performance and seamless UI/UX. Strong back ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging, and deploying native cloud applications. Looking for a challenging role to contribute innovative solutions and drive impact in modern web development."
                textColors={["white"]}
                className="font-mono text-center overflow-hidden tracking-tighter text-[9px] md:text-xl lg:text-4xl"
                typingSpeed={5}
              />
            </span>
          </motion.span>

          <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{ y: [1000, 0] }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} className="z-50"
            >
              <Image
                src={MyPic}
                alt="My image"
                width={400}
                height={400}
                priority // ✅ Loads it earlier without layout shift
                className="h-[300px] w-screen md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[500px] object-cover rounded-[42] grayscale hover:scale-125 transition duration-300"
              />
            </motion.div>

            <div className="bg-white h-full rounded-[42] gap-4 md:gap-6 flex flex-col items-center justify-center w-full">
              <DownloadButtons />

              <motion.span
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                className="flex flex-col gap-4 bg-white p-4 rounded-3xl w-full"
              >
                <div className="bg-black h-12 md:h-24 w-full relative flex items-center justify-center rounded-2xl p-2">
                  {!isHovered ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                      </svg>
                      <span className="text-xl lg:text-2xl text-white font-bold font-mono">Email</span>
                    </div>
                  ) : (
                    <span
                      onClick={() => navigator.clipboard.writeText("johnaditya46@gmail.com")}
                      className="text-lg lg:text-xl tracking-wide text-white italic font-bold font-mono hover:cursor-pointer">
                      johnaditya46@gmail.com
                    </span>
                  )}
                </div>
                <div className="bg-black h-12 md:h-24 w-full relative flex items-center justify-center rounded-2xl p-2">
                  {!isHovered ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>

                      <span className="text-xl lg:text-2xl text-white font-bold font-mono">Phone No.</span>
                    </div>
                  ) : (
                    <span
                      onClick={() => navigator.clipboard.writeText("6396050728")}
                      className="text-xl lg:text-2xl text-white font-bold font-mono hover:cursor-pointer">
                      +91 - 6396050728
                    </span>
                  )}
                </div>
                <div className="bg-black h-12 md:h-24 w-full relative flex items-center justify-center rounded-2xl p-2">
                  {!isHovered ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>

                      <span className="text-xl lg:text-2xl text-white font-bold font-mono">Address</span>
                    </div>
                  ) : (
                    <span className="text-xl lg:text-xl text-white font-bold font-mono">
                      Dehradun, Uttarakhand, INDIA
                    </span>
                  )}
                </div>

              </motion.span>
            </div>
          </div>
        </div>
      }

      <span className="absolute">
        <p className="text-white mix-blend-difference text-4xl lg:text-[8rem] font-serif uppercase z-50">
          {words[count]}
        </p>
      </span>
    </div>
  );
}

export default Hero;
