import { projects } from "@/data";
import { StickyScroll } from "./aceternity/StickyCardReveal";


export const content = [
  {
    title: "VERSUS (E-Learning Website)",
    des: "Learn and grow together with VERSUS, a platform that truly makes you wish you were learning in a way that really teaches you.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <img
          src="/p1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="VERSUS E-Learning Website"
        />
      </div>
    ),
  },
  {
    title: "Kanban Board (Full Stack)",
    des: "Welcome to your personal KANBAN BOARD, where you can manage your tasks and projects with ease.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <img
          src="/p5.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Kanban Board"
        />
      </div>
    ),
  },
  {
    title: "Flappy Bird (Mobile App)",
    des: "Play as FLAPPY on an adventure against obstacles.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <img
          src="/p2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Flappy Bird Mobile App"
        />
      </div>
    ),
  },
  {
    title: "POSEIDON PLATE (Restaurant Website)",
    des: "Presenting the taste of GOA in the palm of your hands, with the leisure to book a table from wherever you sit.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <img
          src="/p3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Poseidon Plate Restaurant Website"
        />
      </div>
    ),
  },
  {
    title: "Personal Portfolio",
    des: "Welcome to a special place where you feel the MAGIC of being ME for the while you stay...",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden text-white">
        <img
          src="/Portfolio_img.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Personal Portfolio Website"
        />
      </div>
    ),
  },
];


export default function AboutNew() {
  return (
    <div className="h-screen w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
