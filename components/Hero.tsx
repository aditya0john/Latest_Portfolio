"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import TextType from "./ReactBits/TextType";
import DownloadButtons from "./DownloadButtons";
import { playSfx } from "@/lib/Sound";
import Image from "next/image";

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
    <div className={`grayscale brightness-110 h-screen p-2 md:p-0 flex flex-col items-center justify-center ${loading ? "gap-0" : "gap-4"} relative overflow-hidden`}>
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
        className={`overflow-hidden flex flex-col items-center justify-center`}
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
        <div className="flex flex-col items-start justify-center absolute bottom-4 lg:-translate-y-1/2 lg:left-20 lg:-bottom-10 md:left-4 mix-blend-difference">
          <span className="text-white text-5xl md:text-6xl lg:text-[7rem] tracking-wide font-sans font-bold lg:translate-x-12">ADITYA</span>
          <span className="text-white text-7xl md:text-8xl lg:text-[14rem] font-sans font-bold lg:-translate-y-10">JOHN</span>
          <span className="text-white text-xl font-thin font-sans lg:-translate-y-10">{"- Software Developer (Full-Stack & Mobile)"}</span>
        </div>
      }

      {count > 3 &&
        <div className="flex flex-col items-start justify-center gap-32 absolute top-10 lg:top-40 right-20">
          <div className="flex items-center justify-center gap-20">
            <div className="flex flex-col items-start">
              <span className="text-5xl font-medium">20+</span>
              <span className="text-xl font-thin">projects</span>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-5xl font-medium">4+</span>
              <span className="text-xl font-thin">apps</span>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6">
            <span className="text-3xl font-medium">PRODUCTS</span>

            <div className="flex flex-col px-2 gap-2">
              <span className="text-xl flex items-center gap-2">{"VERSUS-CODE"} <span className="text-neutral-600 font-thin text-sm">{"(Ed-Tech website Platform)"}</span></span>
              <span className="text-sm font-thin max-w-sm">{"A feature-rich E-Learning platform using Next.js and Supabase with real-time sync, secure authentication via Google Cloud, and in-browser C/C++ compilation using JDoodle API. Optimized performance with Zustand and built an admin panel for seamless user and course management."}</span>
            </div>

            <div className="flex flex-col px-2 gap-2">
              <span className="text-xl flex items-center gap-2">{"INSTANT DELIVERY APP"} <span className="text-neutral-600 font-thin text-sm">{"(private to client)"}</span></span>
              <span className="text-sm font-thin max-w-sm">{"A modern instant delivery app built with React Native, featuring a sleek iOS-inspired liquid glass design across the app. It goes beyond traditional ordering by introducing a smart “Need-Want” system, allowing users not only to browse and purchase products but also to create real-time demand requests for items they need. This dynamic approach makes the platform more interactive, responsive, and user-driven, redefining how instant delivery services operate."}</span>
            </div>
          </div>
        </div>
      }

      {/* {count > 3 &&
        <div className="flex flex-col items-center gap-6 absolute bottom-1/2 translate-y-60 lg:translate-y-20 right-4 ">
          <DownloadButtons />

          <div className="max-w-xs md:max-w-lg flex flex-col items-center">
            <span className="text-black text-md md:text-2xl font-mono font-bold">FULL STACK &</span>
            <span className="text-black text-md md:text-2xl font-mono font-bold">REACT NATIVE DEVELOPER</span>
            <TextType
              text="Results-driven Full-Stack Developer with expertise in React, Next.js, Node.js, and TypeScript. Passionate about building scalable web applications with optimized performance and seamless UI/UX. Strong back ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging, and deploying native cloud applications. Looking for a challenging role to contribute innovative solutions and drive impact in modern web development."
              textColors={["white"]}
              className="font-mono text-center overflow-hidden tracking-tight text-xs md:text-lg"
              typingSpeed={5}
            />
          </div>
        </div>
      } */}

      <span className="absolute">
        <p className="text-white mix-blend-difference text-4xl lg:text-[8rem] font-serif uppercase z-50">
          {words[count]}
        </p>
      </span>
    </div>
  );
}

export default Hero;
