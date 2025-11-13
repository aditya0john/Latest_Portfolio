import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Marquee({
  Photo,
}: {
  Photo: { name: string; id: number; src: string }[];
}) {
  const repeatPhoto = [...Photo, ...Photo]; // Duplicate words for continuous effect

  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className="absolute flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }} // Moves half-way, loops infinitely
        transition={{
          repeat: Infinity,
          duration: 15, // Adjust speed
          ease: "linear",
        }}
      >
        {repeatPhoto.map(({ name, id, src }, index) => (
          <span
            key={`${id}-${index}`}
            className="text-2xl lg:text-4xl text-black font-extrabold uppercase font-mono flex items-center justify-center mx-8"
          >
            <span className="flex items-center justify-start gap-2">
              <Image
                src={src}
                alt="image"
                height="40"
                width="40"
                className="rounded-full object-cover"
              />
              {name}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
