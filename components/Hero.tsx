"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BackgroundBeamsWithCollision } from "./beams";
import Image from "next/image";
import { HeroHighlight } from "./aceternity/HeroHighlight";
import { TextGenerateEffect } from "./aceternity/text-generate";

function Hero() {
  const [isloading, setIsLoading] = useState(true);
  const words = ["W E L C O M E", "I AM", " "];
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count <= words.length) {
      const timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 3400);
      return () => clearTimeout(timer); // Cleanup to prevent memory leaks
    } else {
      setIsLoading(false);
    }
  }, [count]);

  console.log(count);

  const Introduction = () => {
    return (
      <div className="flex items-center justify-center h-[50rem] lg:h-[38rem] bg-gradient-to-br from-[#FFF9F3] to-[#FFEFEB] bottomCurve">
        <span className="h-80 w-80 rounded-full redBall lg:bg-gradient-to-r from-orange-600 to-red-600">
          <Image
            src="/noise.svg"
            alt="grain svg"
            fill
            className="hidden lg:block object-cover absolute rounded-full"
          />
          {count >= 1 && (
            <Image
              src={"/dithered-ME.png"}
              alt="My image"
              height={80}
              width={80}
              className="z-50 lg:-bottom-8 absolute right-20 lg:right-0 rounded-full h-[400px] w-[400px] object-cover -rotate-6 grayscale lg:hover:scale-[1.1] lg:hover:-rotate-2 transition duration-300"
            />
          )}
        </span>

        <span className="absolute mix-blend-difference">
          <p className="text-[3.5rem] lg:text-[6rem] font-serif capitalize">
            {words[count]}
          </p>
        </span>

        {count >= 2 && (
          <div className="logo-container gap-6 text-[3.5rem] lg:text-[6rem] font-serif capitalize text-black SecText">
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
        <div className="z-50 absolute flex -top-[12px] left-2 text-[3.5rem] lg:text-[3rem] font-serif capitalize text-black">
          AJ
        </div>
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

        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-lg lg:max-w-5xl text-center"
          >
            <span className="flex flex-col gap-2">
              <TextGenerateEffect
                className="text-4xl text-center lg:text-6xl font-extrabold uppercase"
                words="transforming concepts into seemless, user experiences"
                red={3}
                textColor="text-red-600"
              />
              <p className="flex flex-col items-center justify-center lg:flex-row text-[20px] lg:text-[24px] bg-gradient-to-r from-orange-400 to-red-400 capitalize bg-clip-text text-transparent">
                <span>wesbites that make you "Outshine",</span>{" "}
                <span className="italic">websites that makes you "grow"</span>
              </p>
            </span>
          </motion.h1>
        </HeroHighlight>

        <div className="flex items-center justify-center text-center z-50">
          <div className="lg:bg-gradient-to-r from-orange-600 to-red-600 rounded-full h-[400px] w-[400px] -bottom-8 absolute -right-10 overflow-hidden">
            <Image
              src="/noise.svg"
              alt="grain svg"
              fill
              className="hidden lg:block object-cover absolute rounded-lg"
            />
            <Image
              src={"/dithered-ME.png"}
              alt="My image"
              height={80}
              width={80}
              className="rounded-full h-[400px] w-[400px] object-cover -rotate-6 grayscale lg:hover:scale-[1.1] lg:hover:-rotate-2 transition duration-300"
            />
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
