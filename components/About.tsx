import React from "react";
import { TextGenerateEffect } from "./aceternity/text-generate";
import { FlipWords } from "./aceternity/flipWords";
import Image from "next/image";

function About() {
  const words = ["better", "innovative", "beautiful", "modern"];

  return (
    <div className=" lg:scale-100 flex flex-col gap-4 items-center">
      {/* <CardSpotlight> */}
        <div className="flex flex-col gap-4 items-center justify-center p-8 lg:max-w-7xl">
          <span className="text-4xl lg:text-6xl text-center font-extrabold text-neutral-300 z-50">
            Build
            <FlipWords
              words={words}
              className="uppercase text-yellow-200 font-serif"
            />
            Together
          </span>

          <TextGenerateEffect
            className="text-white capitalize font-sans font-semibold text-xl/snug lg:text-[35px] text-justify tracking-tighter overflow-hidden"
            staggerdelay={0.1}
            duration={0.2}
            words="A passionate and resourceful 'Computer Science' graduate with a strong track record in 'full stack' and 'mobile
          application development'. Adept at delivering high-quality projects, optimizing productivity, and solving
          complex problems. Seeking a challenging position to leverage my technical expertise and innovative mindset."
          />
        </div>
      {/* </CardSpotlight> */}

      <div className="grid grid-cols-2 w-full p-4 lg:flex items-center justify-center gap-4 ">
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="bg-gradient-to-r from-orange-600 to-white/[0.4] h-32 lg:h-40 text-3xl lg:text-6xl text-yellow-300 font-extrabold capitalize font-sans noise rounded-3xl max-w-5xl flex flex-col gap-4 items-center justify-center relative p-4"
            >
              <Image
                src="/noise.svg"
                alt="grain svg"
                fill
                className="object-cover absolute rounded-3xl"
              />
              <p>{words[i]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
