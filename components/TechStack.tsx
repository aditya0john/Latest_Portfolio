import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "./aceternity/BentoGrid";
import Marquee from "./Marquee";

export default function TechStack() {
  return (
    <div className="h-full w-full flex items-center justify-center overflow-hidden">
      <span className="flex">
        <motion.div
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
            delay: 0.4,
            duration: 1,
            // ease: [0.4, 0.0, 0.2, 1],
            ease: "easeInOut"
          }}
          className="text-white max-w-sm translate-x-6 hidden lg:block"
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <p
                key={i}
                className={`text-5xl/tight ${i % 2 == 0 ? "rotate-2" : "-rotate-2"} font-extrabold text-white`}
              >
                TECHSTACK
              </p>
            ))}
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-50 p-4 lg:p-0 scale-75 lg:scale-100">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
            />
          ))}
        </BentoGrid>

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
            delay: 0.4,
            duration: 1,
            // ease: [0.4, 0.0, 0.2, 1],
            ease: "easeInOut"

          }}
          className="text-black max-w-sm translate-x-6 hidden lg:block"
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <p
                key={i}
                className={`text-5xl/tight ${i % 2 == 0 ? "-rotate-2" : "rotate-2"} font-extrabold text-white`}
              >
                TECHSTACK
              </p>
            ))}
        </motion.div>
      </span>
    </div>
  );
}

const SkeletonOne = () => {
  const FrontEnd = [
    { id: 1, name: "Next.js", src: "/next.png" },
    { id: 2, name: "React.js", src: "/React.png" },
    { id: 3, name: "Tailwind CSS", src: "/tailwind.png" },
    { id: 4, name: "Typescript", src: "/typescript.png" },
    {
      id: 5,
      name: "Framer Motion",
      src: "/Techstack logos/Framer Motion.jpeg",
    },
  ];

  const BackEnd = [
    { id: 1, name: "Node.js", src: "/Techstack logos/node.webp" },
    { id: 2, name: "Express.js", src: "/Techstack logos/expressJs.png" },
    { id: 3, name: "REST API", src: "/rest api.svg" },
    { id: 4, name: "Goodle Auth", src: "/Techstack logos/google auth.png" },
    { id: 5, name: "MongoDB", src: "/Techstack logos/MongoDb.gif" },
    { id: 6, name: "Mongoose", src: "/Techstack logos/mongoose.png" },
    { id: 7, name: "SQL", src: "/Techstack logos/sql.webp" },
    { id: 8, name: "PostgreSQL", src: "/postgres.png" },
  ];

  const DevOps = [
    { id: 1, name: "Git & Github", src: "/Techstack logos/Git Github.webp" },
    { id: 2, name: "Vercel", src: "/vercel.svg" },
    { id: 3, name: "Resend", src: "/Techstack logos/resend.jpg" },
    { id: 4, name: "Figma", src: "/Techstack logos/figma.jpeg" },
    { id: 5, name: "Spline", src: "/Techstack logos/spline.jpeg" },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center justify-center gap-2 h-full w-full overflow-hidden hover:cursor-none"
    >
      <div className="bg-black h-24 w-full relative flex items-center justify-center rounded-2xl">
        {!isHovered ? (
          <div className="text-3xl lg:text-5xl text-white font-bold font-mono">
            {" "}
            FrontEnd{" "}
          </div>
        ) : (
          <Marquee Photo={FrontEnd} />
        )}
      </div>
      <div className="bg-black h-24 w-full relative flex items-center justify-center rounded-2xl">
        {!isHovered ? (
          <div className="text-3xl lg:text-5xl text-white font-bold font-mono">
            {" "}
            BackEnd
          </div>
        ) : (
          <Marquee Photo={BackEnd} />
        )}
      </div>
      <div className="bg-black h-24 w-full relative flex items-center justify-center rounded-2xl">
        {!isHovered ? (
          <div className="text-3xl lg:text-5xl text-white font-bold font-mono">
            CI/CD &amp; DevOps
          </div>
        ) : (
          <Marquee Photo={DevOps} />
        )}
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/typescript.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-16 w-16 object-cover invert"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white/80 mt-4">
          Just code in Tyepscript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/tailwind.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-24 w-24 object-contain"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-white/80 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-black p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <span className="flex">
          <Image
            src="/postgres.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-16 w-16 object-cover invert"
          />
        </span>
        <p className="sm:text-sm text-xs text-center font-semibold text-white/80 mt-4">
          I love SQL and PostgreSQL
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Hover/Touch",
    header: <SkeletonOne />,
    className: "col-span-3",
  },
  {
    title: "FAST, RELIABLE, GLOBALLY USED, SECURE TECH",
    description: (
      <p className="text-sm text-black/60">All the TECHNOLOGY you name it I do it.</p>
    ),
    header: <SkeletonTwo />,
    className: "col-span-3",
  },
];
