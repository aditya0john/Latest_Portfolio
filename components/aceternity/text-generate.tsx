"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  textColor,
  red = words.length,
  className,
  filter = true,
  duration = 0.5,
  staggerdelay = 0.2,
}: {
  red?: number;
  textColor?: string;
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerdelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(staggerdelay),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(
                `text-neutral-700 !drop-shadow-[6px_3px_3px_rgba(0,0,0,0.25)] !font-[100px] opacity-0 hover:!text-red-600 transition duration-300 ${
                  idx > red ? `${textColor} !font-extrabold` : ""
                }`,
                className
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
