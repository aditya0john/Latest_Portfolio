import RotatingText from "./ReactBits/RotatingText";
import TextType from "./ReactBits/TextType";
import Image from "next/image";
import { useEffect, useState } from "react";


function About() {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const words = [
    "faster",
    "innovative",
    "beautiful",
    "modern",
    "creative",
    "techy",
  ];


  const download = () => {
    const link = document.createElement("a");
    link.href = "/RESUME.pdf"; // Path to your resume file
    link.download = "AdityaJohnResume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch("/api/GetImages");

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        setImages(
          Array.isArray(data.images) ? data.images : []
        );
      } catch (error) {
        console.error("Image fetching error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);


  return (
    <div id="About" className="h-full bg-gradient-to-b from-neutral-100 to-neutral-200 grid grid-rows-[2fr_1fr] lg:gap-4 items-center justify-between overflow-hidden select-none">
      <div className="w-full grid grid-cols-[1fr_2fr] items-start justify-between p-10">
        <Image
          alt="My Image"
          src={"/images/ME2.jpg"}
          height={600}
          width={600}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          className="grayscale object-cover rounded-full overflow-hidden w-40 h-40 lg:w-80 lg:h-80 mx-auto"
        />

        <div className="flex flex-col items-start justify-center gap-10">
          <TextType
            text={"Mobile Engineer & Fullstack Developer"}
            className="text-8xl font-medium max-w-4xl text-left"
            textColors={["black"]}
            typingSpeed={40}
          />
          <TextType
            text={"Results-driven Full-Stack Developer with expertise in React, React Native, Next.js, Node.js, and TypeScript. Passionate about building scalable web applications with optimized performance and seamless UI/UX.\n\nStrong back ground in MongoDB, PostgreSQL, Tailwind CSS, and CI/CD pipelines. Having experience solving, debugging, and deploying native cloud applications. Looking for a challenging role to contribute innovative solutions and drive impact in modern web development."}
            className="font-mono text-left max-w-3xl text-xs md:text-md lg:text-[1rem] px-2"
            textColors={["gray"]}
            typingSpeed={10}
            initialDelay={1400}
          />
        </div>
      </div>

      <div className="bg-black h-full flex gap-4 items-start justify-center p-4 rounded-t-3xl w-full selct-none relative">
        <div className="w-full flex flex-col items-center gap-4 rounded-t-2xl overflow-hidden hover:cursor-all-scroll">
          <div className="flex gap-4 overflow-x-scroll no-scrollbar">
            {images.map((src, index) => (
              <div
                key={src}
                className="relative flex-1 min-w-[calc(100%/6)] max-w-[calc(100%/6)] transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Work ${current + index + 1}`}
                  height={500}
                  width={500}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-60 w-full object-cover object-top rounded-2xl"
                />
              </div>
            ))}
          </div>

          <div className="h-[6rem] flex items-end justify-center w-full bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0" />
        </div>
      </div>
    </div>
  );
}

export default About;
