
"use client";

import Image from "next/image";
import { useState } from "react";

type CarouselImage = {
  src: string;
  alt?: string;
};

type HoverExpandCarouselProps = {
  images: CarouselImage[];
  height?: string;
  className?: string;
};

export default function HoverExpandCarousel({
  images,
  height = "60dvh",
  className = "",
}: HoverExpandCarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div
      className={`flex w-full gap-3 overflow-hidden rounded-[32px] ${className}`}
      style={{ height }}
      onMouseLeave={() => setActiveIndex(0)}
    >
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          onMouseEnter={() => setActiveIndex(index)}
          className="relative min-w-0 flex-1 cursor-pointer overflow-hidden rounded-[24px] transition-[flex] duration-500 ease-in-out"
          style={{
            flex:
              activeIndex === index
                ? "3 1 0%"
                : activeIndex === null
                  ? "1 1 0%"
                  : "0.6 1 0%",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt ?? `Project image ${index + 1}`}
            fill
            sizes="(max-width: 768px) 80vw, 60vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 hover:bg-transparent" />

          <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-[8px] text-white backdrop-blur-sm">
            {image.alt}
          </span>
        </div>
      ))}
    </div>
  );
}
