"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import TextType from "./ReactBits/TextType";
import Image from "next/image";

function Hero() {
  const Today = new Date();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5700);
  }, []);

  return (
    <div id="TopPage" className={`bg-black brightness-110 h-screen p-2 md:p-0 flex flex-col items-center justify-center ${loading ? "gap-0" : "gap-4"} relative overflow-hidden select-none`}>
      <motion.div
        style={{
          aspectRatio: 1,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          backgroundColor: ["#fff"],
          height: ["0vmin", "0vmin", "0vmin", "200vh"],
          width: ["0vmin", "0vmin", "0vmin", "200vw"],
          borderRadius: ["50%", "50%", "50%", "15%"],
          x: [-300, 0, 0, 0],
          y: [-100, 0, 0, 0],
        }}
        transition={{
          duration: 6,
          times: [0, 0.25, 0.82, 1],
          ease: "easeInOut"
        }}
        className={`overflow-hidden flex flex-col items-center justify-center`}
      >
        <motion.div
          className="absolute inset-0 BgImg grayscale"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{
            duration: 6.4,
            times: [0, 0.25, 0.92, 1],
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <>
        {!loading && <div className="absolute right-0 bottom-0 flex flex-col items-end justify-center p-2">
          <span className="text-black text-xs italic font-medium uppercase z-50">Uttarakhand, India</span>
          <span className="text-neutral-600 text-sm italic font-bold z-50">{ } {Today.toLocaleDateString("en-GB")}</span>
        </div>}

        <div className="flex flex-col items-end justify-center absolute bottom-4 lg:bottom-14 md:left-4">
          {loading ?
            <span className="flex flex-col text-right justify-center">
              <TextType
                text={"ADITYA"}
                className="text-white text-5xl md:text-6xl lg:text-[14rem] tracking-wide font-sans font-bold"
                initialDelay={1000}
                typingSpeed={100} />
              <TextType
                text={"JOHN"}
                className="text-white text-7xl md:text-8xl lg:text-[14rem] tracking-tighter lg:-translate-y-10 font-sans font-bold"
                initialDelay={2400}
                typingSpeed={180}
              />
            </span>
            :
            <div className="mix-blend-difference">
              <div className="relative">
                <span className="text-cyan-400 text-5xl md:text-6xl lg:text-[14rem] tracking-wide font-sans font-bold">ADITYA</span>
                <Image
                  alt="FLOWER"
                  src={"/images/FLOWER.png"}
                  height={1000}
                  width={600}
                  className="grayscale absolute top-0"
                />
              </div>

              <div className="flex flex-col text-right justify-center">
                <span className="text-cyan-400 text-7xl md:text-8xl lg:text-[14rem] lg:-translate-y-10 font-sans font-bold">JOHN</span>
                <Image
                  alt="FLOWER"
                  src={"/images/FLOWER.png"}
                  height={1000}
                  width={600}
                  className="grayscale absolute right-0"
                />
              </div>
            </div>
          }
        </div>


        <div className="flex flex-col items-start justify-center gap-32 absolute top-10 lg:top-10 right-20">
          {!loading && <div className="flex items-center justify-center gap-20">
            <div className="flex flex-col items-end">
              <span className="text-black text-5xl font-medium">20+</span>
              <span className="text-neutral-800 text-md italic -translate-y-2">projects</span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-black text-5xl font-medium">4+</span>
              <span className="text-neutral-800 text-md italic -translate-y-2">apps</span>
            </div>
          </div>}

          {/* {!loading &&
            <div className="hidden lg:flex flex-col gap-6">
              <span className="text-red-600 text-3xl font-medium">PRODUCTS</span>

              <div className="flex flex-col px-2 gap-2">
                <span className="text-red-600 text-xl flex items-center gap-2">{"VERSUS-CODE"} <span className="text-red-800 font-thin text-sm">{"(Ed-Tech website Platform)"}</span></span>
                <span className="text-blue-900 text-sm font-mono max-w-sm tracking-tighter">{"A feature-rich E-Learning platform using Next.js and Supabase with real-time sync, secure authentication via Google Cloud, and in-browser C/C++ compilation using JDoodle API. Optimized performance with Zustand and built an admin panel for seamless user and course management."}</span>
              </div>

              <div className="flex flex-col px-2 gap-2">
                <span className="text-red-600 text-xl flex items-center gap-2">{"INSTANT DELIVERY APP"} <span className="text-red-800 font-thin text-sm">{"(private to client)"}</span></span>
                <span className="text-blue-900 text-sm font-mono max-w-sm tracking-tighter">{"A modern instant delivery app built with React Native, featuring a sleek iOS-inspired liquid glass design across the app. It goes beyond traditional ordering by introducing a smart “Need-Want” system, allowing users not only to browse and purchase products but also to create real-time demand requests for items they need. This dynamic approach makes the platform more interactive, responsive, and user-driven, redefining how instant delivery services operate."}</span>
              </div>
            </div>
          } */}
        </div>
      </>
    </div>
  );
}

export default Hero;
