import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { BentoGrid, BentoGridItem } from "./aceternity/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function TechStack() {
  return (
    <div className="PrmColor h-full w-full flex items-center justify-center overflow-hidden">
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
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-black max-w-sm translate-x-6 hidden lg:block"
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <p
                key={i}
                className="text-5xl/tight -rotate-2 font-extrabold noise bg-clip-text text-transparent"
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
              icon={item.icon}
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
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-black max-w-sm translate-x-6 hidden lg:block"
        >
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <p
                key={i}
                className="text-5xl/tight -rotate-2 font-extrabold noise bg-clip-text text-transparent"
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
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={"/next.svg"}
          alt="image"
          height={30}
          width={30}
          className="invert"
        />
        <div className="italic text-xs text-black">Next.js</div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row justify-between rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="italic text-xs text-black">Typescript</div>
        <Image
          src={"/ts.svg"}
          alt="image"
          height={30}
          width={30}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <Image src={"/tail.svg"} alt="image" height={30} width={30} />
        <div className="italic text-xs text-black">Tailwind CSS</div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <Image
          src={"/next.svg"}
          alt="image"
          height={30}
          width={30}
          className="invert"
        />
        <div className="italic text-xs text-black">Next.js</div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row justify-between rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="italic text-xs text-black">Typescript</div>
        <Image
          src={"/ts.svg"}
          alt="image"
          height={30}
          width={30}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <Image src={"/tail.svg"} alt="image" height={30} width={30} />
        <div className="italic text-xs text-black">Tailwind CSS</div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
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
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/typescript.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-16 w-16 object-cover"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Tyepscript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/tailwind.png"
          alt="avatar"
          height="100"
          width="100"
          className="h-24 w-24 object-contain"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <span className="flex">
          <Image
            src="/postgres.png"
            alt="avatar"
            height="100"
            width="100"
            className="rounded-full h-16 w-16 object-cover"
          />
        </span>
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
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
    title: "FrontEnd",
    description: (
      <p className="text-sm PrmText">
        Elevate your brand with seamless, interactive user experiences.
      </p>
    ),
    header: <SkeletonOne />,
    className: "col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    title: "BackEnd",
    description: (
      <p className="text-sm PrmText">
        Your data, logic, and performance optimized to perfection.
      </p>
    ),
    header: <SkeletonTwo />,
    className: "col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
  },
  {
    title: "FullStack",
    description: (
      <p className="text-sm PrmText">
        From sleek, engaging UIs to rock-solid backend systems, Lets build
        something extraordinary together!
      </p>
    ),
    header: <SkeletonThree />,
    className: "col-span-1 hidden lg:flex",
    icon: <IconSignature className="h-4 w-4 text-white" />,
  },
  {
    title: "FAST, RELIABLE, GLOBALLY USED, SECURE TECH",
    description: (
      <p className="text-sm PrmText">All the TECHNOLOGY you name it I do it.</p>
    ),
    header: <SkeletonFour />,
    className: "col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
  },
];
