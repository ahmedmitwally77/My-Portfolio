"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";

export function ProjectCard({
  data,
}: {
  data: {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: React.ComponentType[]; // أو IconType[]
    link: string;
  };
}) {
  return (
    <PinContainer title={data.title} href={data.link}>
      <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[22rem] md:h-[29rem] w-[20rem] h-[29rem]">
        <div className="flex w-full justify-center items-center rounded-lg mb-4">
          <Image
            src={data.img}
            alt={data.title}
            width={300}
            height={200}
            className="w-full h-[250px] object-cover self-center object-center"
          />
        </div>
        <h3 className="max-w-xs !pb-4 !m-0 font-bold text-base text-slate-900 dark:text-slate-100">
          {data.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="dark:text-slate-500 text-slate-600 line-clamp-4 md:line-clamp-4">
            {data.des}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 mb-3">
          <div className="flex items-center">
            {data.iconLists.map((Icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black text-xl lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{ transform: `translateX(-${10 * index + 2}px)` }}
              >
                <Icon />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center dark:bg-white dark:text-black bg-slate-900 text-white p-2 rounded-3xl">
            <p className="flex lg:text-md md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3 text-white dark:text-black" />
          </div>
        </div>
      </div>
    </PinContainer>
  );
}
