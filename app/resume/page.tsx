"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { easeInOut, motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGit,
  FaGithub,
  FaCss3,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiPrisma,
  SiNodedotjs,
  SiRedux,
  SiNestjs,
  SiDocker,
  SiNginx,
  SiDjango,
  SiFlutter,
  SiDart,
  SiFigma,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { Description } from "@radix-ui/react-dialog";

const about = {
  title: "About Me",
  description:
    "Full Stack Web Developer with expertise in designing and implementing dynamic web applications. Skilled in front-end and back-end development, proficient in technologies such as HTML, CSS, JavaScript, React, Node.js, and database management. Adept at creating seamless user experiences and efficient, scalable solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Amjaad Rana",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92)3005109219",
    },
    {
      fieldName: "Exprience",
      fieldValue: "5 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Amjaad Rana",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Email",
      fieldValue: "amjaadrana@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Urdu",
    },
  ],
};

const experience = {
  icon: ".",
  title: "My Experience",
  description:
    "Full Stack Web Developer with expertise in designing and implementing dynamic web applications. Skilled in front-end and back-end development, proficient in technologies such as HTML, CSS, JavaScript, React, Node.js, and database management. Adept at creating seamless user experiences and efficient, scalable solutions.",
  items: [
    {
      company: "Veron Solutions",
      role: "Full Stack Developer",
      years: "2023 - Present",
    },
    {
      company: "Enzipe",
      role: "Fontend Developer",
      years: "2022",
    },
    {
      company: "Mass Media Development",
      role: "web Designer",
      years: "2021",
    },
  ],
};

const education = {
  icon: ".",
  title: "My Education",
  description:
    "Full Stack Web Developer with expertise in designing and implementing dynamic web applications. Skilled in front-end and back-end development, proficient in technologies such as HTML, CSS, JavaScript, React, Node.js, and database management. Adept at creating seamless user experiences and efficient, scalable solutions.",
  items: [
    {
      company: "Udemy",
      Degree: "Full Stack Developer",
      years: "2023",
    },
    {
      company: "Udemy",
      Degree: "Frontend Developer",
      years: "2022 - Present",
    },
    {
      company: "Armed Forces Board for Higher Education",
      Degree: "Faculty of Arts",
      years: "1998",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Full Stack Web Developer with expertise in designing and implementing dynamic web applications. Skilled in front-end and back-end development, proficient in technologies such as HTML, CSS, JavaScript, React, Node.js, and database management. Adept at creating seamless user experiences and efficient, scalable solutions.",

  skillList: [
    {
      icon: <FaHtml5 />,
      title: "html 5",
    },
    {
      icon: <FaCss3Alt />,
      title: "css 3",
    },
    {
      icon: <FaJs />,
      title: "javascript ",
    },
    {
      icon: <FaReact />,
      title: "Reactjs",
    },
    {
      icon: <FaReact />,
      title: "Reactjs",
    },
    {
      icon: <FaNodeJs />,
      title: "Node js",
    },
    // {
    //   icon: <FaDatabase />,
    //   title: "Mongo DB, postgaslq",
    // },
    {
      icon: <FaGit />,
      title: "Git",
    },
    {
      icon: <FaGithub />,
      title: "Git Hub",
    },
    {
      icon: <FaCss3 />,
      title: "css 3",
    },
    {
      icon: <SiNextdotjs />,
      title: "Next js",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tail windcss",
    },
    {
      icon: <SiExpress />,
      title: "Express",
    },
    {
      icon: <SiPostgresql />,
      title: "Postgresql",
    },
    {
      icon: <SiMongodb />,
      title: "Mongodb",
    },
    {
      icon: <SiTypescript />,
      title: "Typescript",
    },
    {
      icon: <SiNodedotjs />,
      title: "Node js",
    },
    {
      icon: <SiPrisma />,
      title: "Prisma",
    },
    {
      icon: <SiPrisma />,
      title: "Prisma",
    },
    {
      icon: <SiFigma />,
      title: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      title: "Photoshop",
    },
  ],
};

const Resumepage = () => {
  return (
    /*<section> */
    <div className="container mx-auto">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.5,
            duration: 0.5,
            ease: "easeIn",
          },
        }}
        className="items-center justify-center xl:py-0 "
      >
        <Tabs
          defaultValue="skills"
          className="flex flex-col xl:flex-row xl:gap-10 w-full py-8  "
        >
          <TabsList className="flex flex-col max-w-[300px] mx-auto xl:mx-0 gap-5 w-full ">
            <TabsTrigger value="skills">skills</TabsTrigger>
            <TabsTrigger value="experience">experience</TabsTrigger>
            <TabsTrigger value="education">education</TabsTrigger>
            <TabsTrigger value="about">about</TabsTrigger>
          </TabsList>          
          {/* content */}
          <div className=" min-h[80vh] w-full">

            {/* Skills */}
            
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col mt-4 xl:mt-0 gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl text-bold text-secondary">
                  {skills.title}
                </h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {skills.skillList.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="gap-[10px] bg-[#242429] rounded-[10px] py-5 justify-center items-center flex flex-col xl:flex-start"
                        >
                          <span className="text-accent">{item.title}</span>
                          <h3 className="text-2xl font-semibold min-h-[40px] mix-w-[300px] lg:text-left lg:text-3xl">{item.icon}</h3> 
                          {/* <div className="flex items-center gap-4">
                            <span className="bg-accent w-[7px] h-[7px] rounded-full"></span>
                            <p className="text-white/70">{item.icon}</p>
                          </div> */}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            
            
            {/* experince */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col mt-5 xl:mt-0 gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl text-bold text-secondary">
                  {experience.title}
                </h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="gap-[10px] bg-[#242429] rounded-[10px] py-5 justify-center items-center flex flex-col xl:flex-start"
                        >
                          <span className="text-accent">{item.years}</span>
                          <h3 className="text-2xl font-semibold min-h-[40px] mix-w-[300px] lg:text-left lg:text-3xl">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-4">
                            <span className="bg-accent w-[7px] h-[7px] rounded-full"></span>
                            <p className="text-white/70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* about */}

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col mt-4 xl:mt-0 gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl text-bold text-secondary">
                  {about.title}
                </h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="gap-[10px] bg-[#242429] rounded-[10px] py-5 justify-center items-center flex flex-col xl:flex-start"
                        >
                          <span className="text-accent">{item.fieldName}</span>
                          {/* <h3 className="text-2xl font-semibold min-h-[40px] mix-w-[300px] lg:text-left lg:text-3xl">{item.role}</h3>  */}
                          <div className="flex items-center gap-4">
                            {/* <span className="bg-accent w-[7px] h-[7px] rounded-full"></span> */}
                            <p className="text-white/70">{item.fieldValue}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center  xl:text-left">
                <h3 className="text-4xl mt-4 xl:mt-0 text-bold text-secondary">
                  {education.title}
                </h3>
                <p className="max-w-[500px] text-white/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="gap-[10px] bg-[#242429] rounded-[10px] py-5 justify-center items-center flex flex-col xl:flex-start"
                        >
                          <span className="text-accent">{item.years}</span>
                          {/* <h3 className="text-2xl font-semibold min-h-[40px] mix-w-[300px] lg:text-left lg:text-3xl">
                            {item.role}
                          </h3> */}
                          <div className="flex items-center gap-4">
                            <span className="bg-accent w-[7px] h-[7px] rounded-full"></span>
                            <p className="text-white/70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </motion.div>
    </div>
    /*</section>*/
  );
};

export default Resumepage;
