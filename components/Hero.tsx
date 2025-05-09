"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { BackgroundBeamsWithCollision } from "./aceternity/beams";
import Image from "next/image";
import { TextGenerateEffect } from "./aceternity/text-generate";
import Spline from "@splinetool/react-spline";

function Hero() {
  const [isloading, setIsLoading] = useState(true);
  const words = useRef(["W E L C O M E", "I AM", " "]);
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

  const Introduction = () => {
    return (
      <div className="flex items-center justify-center h-[38rem] bg-gradient-to-br from-[#FFF9F3] to-[#FFEFEB] bottomCurve">
        <span className="h-80 w-80 rounded-full redBall lg:bg-gradient-to-r from-[#DE8359] to-[#D86063] lg:overflow-hidden">
          {count >= 1 && (
            <Image
              src={"/dithered-ME.png"}
              alt="My image"
              height={80}
              width={80}
              className="z-50 -bottom-6 lg:-bottom-8 absolute right-20 lg:right-0 rounded-full h-[400px] w-[400px] object-cover -rotate-6 lg:hover:scale-[1.1] lg:hover:-rotate-2 transition duration-300"
            />
          )}
        </span>

        <span className="absolute mix-blend-difference">
          <p className="text-[3.5rem] lg:text-[8rem] font-serif capitalize">
            {words.current[count]}
          </p>
        </span>

        {count >= 2 && (
          <div className="logo-container gap-6 text-[3.5rem] lg:text-[8rem] font-serif capitalize text-black SecText">
            <h1 className="animate-letter">
              A{count <= 2 && <span className="fade-out">DITYA</span>}
            </h1>
            <h1 className="animate-letter">
              J<span className="fade-out">OHN</span>
            </h1>
          </div>
        )}
      </div>
    );
  };

  const final = () => {
    return (
      <div className="background">
        <span className="z-50 absolute flex -top-[12px] left-2 bg-black rounded-lg p-1">
          <div className="text-[3rem] lg:text-[3rem] font-serif capitalize text-white">
            AJ
          </div>
        </span>

        <div className="hidden h-32 w-32 absolute -bottom-4 left-[45%] z-50 lg:flex items-top justify-center overflow-hidden transition duration-300 eyeblink">
          <span className="eyeball flex flex-col items-center justify-center h-32 w-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="#190d05"
              className="w-10 h-10 z-20 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </span>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            x: -1000,
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
          className="max-w-lg lg:max-w-[70%] absolute top-20 left-0"
        >
          <TextGenerateEffect
            className="text-[2.5rem] lg:text-[6rem] font-serif font-extrabold uppercase ml-1 lg:ml-2 leading-none"
            words="transforming concepts into seemless, user experiences"
            red={3}
            textColor="text-red-600"
          />
        </motion.div>

        <div className=" text-center z-50">
          <div className="rounded-full h-[400px] w-[400px] -bottom-12 absolute -right-12">
            <Spline scene="https://prod.spline.design/YGPz7tiqJLCm2JSW/scene.splinecode" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      {isloading ? (
        Introduction()
      ) : (
        <BackgroundBeamsWithCollision>{final()}</BackgroundBeamsWithCollision>
      )}
    </div>
  );
}

export default Hero;
