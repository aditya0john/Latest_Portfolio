"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import TextType from "./ReactBits/TextType";
import DownloadButtons from "./DownloadButtons";
import MyPic from "../public/images/ME2.png"

function Hero() {
  const words = useMemo(
    () => ["W E L C O M E", "I AM", "Aditya John", ""],
    []
  );

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < words.length) {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 2400);
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [count, words.length]);

  return (
    <div className={`h-screen flex ${loading ? "items-center" : "items-start"} justify-center`}>
      <motion.div
        animate={{
          height: ["50vh", "50vh", "50vh", "38rem"],
          width: ["30vw", "30vw", "30vw", "100vw"],
          borderRadius: ["50%", "50%", "50%", "0 0 50% 50% / 0 0 10% 10%"],
          x: [-300, 0, 0, 0],
          y: [-100, 0, 0, loading ? -130 : 0],
        }}
        transition={{
          duration: 9,
          times: [0, 0.25, 0.85, 1],
          ease: "easeInOut",
        }}
        className={`bg-white backdrop-invert overflow-hidden flex flex-col items-center justify-center`}
      >
        {count > 3 && <div className="flex flex-col  items-center justify-center ">
          <span className="text-4xl md:text-6xl lg:text-8xl font-serif tracking-tighter">
            ADITYA JOHN
          </span>

          <DownloadButtons />
        </div>}

        {count > 3 &&
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 h-full lg:-translate-x-10">
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
              className="text-black max-w-sm translate-x-6"
            >
              <TextType
                text="Results-driven Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Passionate about building scalable web applications with optimized performance and seamless UI/UX. Strong back ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging, and deploying native cloud applications. Looking for a challenging role to contribute innovative solutions and drive impact in modern web development."
                textColors={["black"]}
                className="font-normal text-justify overflow-hidden tracking-tighter"
                typingSpeed={5}
              />
            </motion.span>

            <div className="flex flex-row items-center justify-center lg:gap-10">
              <motion.div
                animate={{ y: [1000, 0] }}
                transition={{ duration: 0.5, ease: "easeInOut" }} className="z-50"
              >
                <Image
                  src={MyPic}
                  alt="My image"
                  width={300}
                  height={300}
                  priority // ✅ Loads it earlier without layout shift
                  className="h-[200px] w-[200px] lg:h-[400px] lg:w-[300px] object-cover rounded-3xl grayscale"
                />
              </motion.div>

              <motion.span
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
                className="text-black max-w-sm translate-x-6 flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2 text-xs lg:text-xl">
                  <span className="font-bold uppercase">
                    GMAIL
                  </span>
                  <span className=" uppercase">
                    [ johnaditya46@gmail.com ]
                  </span>
                  <div className="w-full border border-black" />
                  <span className=" font-bold uppercase">
                    PHONE
                  </span>
                  <span className="uppercase">
                    [+91-6396050728]
                  </span>
                  <div className="w-full border border-black" />
                  <span className="font-bold uppercase">
                    ADDRESS
                  </span>
                  <span className="">
                    [ Dehradun, Uttarakhand, INDIA ]
                  </span>
                  <div className="w-full border border-black" />
                </div>
              </motion.span>
            </div>
          </div>
        }
      </motion.div>

      <span className="absolute">
        <p className="text-white mix-blend-difference text-4xl lg:text-[8rem] font-serif uppercase z-50">
          {words[count]}
        </p>
      </span>

    </div>
  );
}

export default Hero;
