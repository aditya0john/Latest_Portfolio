import React from "react";
import Image from "next/image";
import { PinContainer } from "./aceternity/3d-Pin";
import { projects } from "@/data";


function Projects() {
  return (
    <div className="SecColor h-full w-full flex items-center justify-center overflow-hidden font-serif">
      <div className="h-full w-full grid grid-cols-[100%_100%_100%_100%] lg:grid-cols-[50%_50%_50%_50%] items-center justify-start overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar lg:rotate-6">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mx-auto lg:hover:-rotate-6 transition duration-300"
          >
            <PinContainer title={title} href={link}>
              <div className="relative  flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative bg-[#fcf5e5]/[0.6] h-full w-full overflow-hidden rounded-2xl">
                  <Image src="/bg.png" alt="bg-img" fill />
                </div>
                <Image
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 object-cover rounded-2xl"
                  height={400}
                  width={400}
                />
              </div>

              <span className="flex flex-col gap-2">
                <h1 className="font-bold lg:text-3xl md:text-xl text-orange-400 text-base line-clamp-1 uppercase">
                  {title}
                </h1>
                <p className="px-2 list-item list-disc list-inside font-light text-sm lg:text-xl md:text-xl text-orange-200/[0.8]">
                  {des}
                </p>
              </span>
              <div className="flex justify-between items-center mt-7 mb-3 ">
                <div className="flex">
                  {iconLists.map((icons, i) => (
                    <div
                      key={icons}
                      className="border bg-black border-white/[0.2] rounded-full p-2 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * i * 2}px) ` }}
                    >
                      <Image src={icons} alt={icons} height={20} width={20} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="text-orange-600/[0.8] lg:text-xl md:text-xs text-base">
                    Check live Site
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
