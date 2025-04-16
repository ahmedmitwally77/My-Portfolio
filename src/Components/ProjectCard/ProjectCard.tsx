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
    iconLists: string[];
    link: string;
  };
}) {
  return (
    <PinContainer title={data.title} href={data.link}>
      <div className="flex basis-full flex-col   tracking-tight text-slate-100/50 sm:basis-1/2 md:w-[22rem] md:h-[26rem] w-[20rem] h-[24rem] ">
        <div className="flex w-full rounded-lg mb-4">
          <Image
            src={data.img}
            alt={data.title}
            width={0}
            height={0}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="max-w-xs !pb-4 !m-0 font-bold  text-base text-slate-100">
          {data.title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{data.des}</span>
        </div>

        <div className="flex items-center justify-between mt-4 mb-3">
          <div className="flex items-center">
            {data.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${10 * index + 2}px)`,
                }}
              >
                <Image
                  src={icon}
                  width={0}
                  height={0}
                  alt={icon}
                  className="p-2 w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center bg-white text-black p-2 rounded-3xl">
            <p className="flex lg:text-md md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#000" />
          </div>
        </div>
      </div>
    </PinContainer>
  );
}
