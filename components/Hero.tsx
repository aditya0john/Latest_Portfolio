"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import TextType from "./ReactBits/TextType";
import DownloadButtons from "./DownloadButtons";

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
      }, 1600);
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [count, words.length]);

  return (
    <div className={`grayscale h-screen p-2 md:p-0 flex flex-col items-center justify-center ${loading ? "gap-0" : "gap-4"} relative overflow-hidden`}>

      <motion.div
        animate={{
          backgroundColor: ["#fff"],
          height: ["50vh", "50vh", "50vh", "100vh"],
          width: ["30vw", "30vw", "30vw", "100vw"],
          borderRadius: ["50%", "50%", "50%", "0%"],
          x: [-300, 0, 0, 0],
          y: [-100, 0, 0, 0],
        }}
        transition={{
          duration: 6,
          times: [0, 0.25, 0.92, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut", "easeIn"],
        }}
        className={`backdrop-invert overflow-hidden flex flex-col items-center justify-center`}
      >
        <motion.div
          className="absolute inset-0 BgImg"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{
            duration: 6.8,
            times: [0, 0.25, 0.95, 1],
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {count > 3 &&
        <div className="absolute top-4 right-4">
        </div>}


      {count > 3 &&
        <div className="flex flex-col items-center justify-center absolute bottom-8 left-4 lg:-bottom-10 md:left-4 mix-blend-difference">
          <span className="text-white text-5xl md:text-6xl lg:text-[8rem] font-serif font-bold">ADITYA</span>
          <span className="text-white text-7xl md:text-8xl lg:text-[14rem] font-serif font-bold lg:-translate-y-10">JOHN</span>
        </div>
      }

      {count > 3 &&
        <div className="flex flex-col items-end gap-6 absolute bottom-1/2 translate-y-60 lg:translate-y-20 right-4 ">
          <DownloadButtons />

          <div className="max-w-xs md:max-w-lg flex flex-col items-end">
            <span className="text-black text-md md:text-2xl font-serif font-bold">FULL STACK &</span>
            <span className="text-black text-md md:text-2xl font-serif font-bold">REACT NATIVE DEVELOPER</span>
            <TextType
              text="Results-driven Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Passionate about building scalable web applications with optimized performance and seamless UI/UX. Strong back ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging, and deploying native cloud applications. Looking for a challenging role to contribute innovative solutions and drive impact in modern web development."
              textColors={["white"]}
              className="font-serif text-end overflow-hidden tracking-tight text-xs md:text-lg"
              typingSpeed={5}
            />
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
