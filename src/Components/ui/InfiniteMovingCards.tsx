/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
// import meImage from "@/imgs/me.jpg";
import { Star } from "lucide-react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: string;
    quote: string;
    name: string;
    title: string;
    stars: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative mx-auto z-20 max-w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[80vw] md:pb-28 pb-32  md:hover:bg-red-500  max-w-full shrink-0 rounded-2xl border  shadow-md dark:bg-[#04071d] dark:bg-gradient-to-r from-[#04071d] to-[#0c0e23]  p-5 md:p-8 md:w-[40vw]  dark:border-zinc-700 "
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-lg leading-[1.6] text-black dark:text-gray-400 font-normal font-sanstext-white">
                {item.quote}
              </span>

              <div className="absolute bottom-6 z-20 mt-6 flex flex-row items-center">
                <span className="flex justify-center items-center  gap-3 w-full">
                  <img
                    loading="lazy"
                    src={item.img}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="rounded-full w-15 h-15 object-cover"
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <span className="flex flex-col md:flex-row md:items-center gap-2 justify-between">
                      <span className="text-md leading-[1.6] text-black/60  dark:text-gray-400 font-bold">
                        {item.name}
                      </span>
                      <span className="text-md leading-[1.6] text-black/60 flex gap-1  dark:text-gray-400">
                        {Array.from({ length: item.stars }).map((_, index) => (
                          <Star key={index}  color="#FFD700" fill="#FFD700" strokeWidth={0}  />
                        ))}
                        {Array.from({ length: 5 - item.stars }).map((_, index) => (
                          <Star
                            key={`${index} ${item.stars}`}
                          />
                        ))}
                      </span>
                    </span>
                    <span className="text-md leading-[1.6] font-normal text-black/50 dark:text-gray-400">
                      {item.title}
                    </span>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
