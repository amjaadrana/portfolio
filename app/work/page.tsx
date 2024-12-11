"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BsArrowUp,
  BsArrowUpRight,
  BsArrowUpRightCircle,
  BsGithub,
} from "react-icons/bs";
import { SiSwiper } from "react-icons/si";

const projects = [
  {
    num: "01",
    category: "fronted",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias quam nam iusto animi dolores.",
    stack: [{ name: "html 5" }, { name: "css 3" }, { name: "Javascript" }],
    Image: "/work/1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "full stack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias quam nam iusto animi dolores.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    Image: "/work/2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fronted",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non alias quam nam iusto animi dolores.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    Image: "/work/3.png",
    live: "",
    github: "",
  },
];

function Workpage() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    // const currentIndex = swiper.activeIndex;
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.3,
          duration: 0.5,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0 py-12 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4 h-[50%]">
              <div className="text-8xl leading-none text-transparent text-outline font-extrabold">
                {project.num}
              </div>
              <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-slate-400">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {stack.name}
                    </li>
                  );
                })}
              </ul>
              {/* boarder */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex gap-4 items-center">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[65px] h-[65px] flex items-center justify-center rounded-full bg-white/20 group-hover:bg-accent transition-all duration-500 hover:rotate-45">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add to library</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[65px] h-[65px] flex items-center justify-center rounded-full bg-white/20 group-hover:bg-accent transition-all duration-500 hover:rotate-45">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[460px] mb-10"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[280px] relative group flex justify-center
                        items-center bg-red-50/20"
                    >
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.Image}
                          alt="project"
                          fill
                          className="object-cover"
                          //   width={500}
                          //   height={500}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex absolute right-0 bottom-[calc(50%_-_15px)] gap-2 z-20 xl:bottom-[calc(35%_-_30px)] w-full justify-between xl:w-max "
                btnStyles="bg-accent hover:bg-accent/60 w-[30px] h-[30px] flex justify-center items-center transition-all"
                iconStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Workpage;
