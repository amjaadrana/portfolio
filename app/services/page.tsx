"use client";
import { BsArrowDown, BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    number: 1,
    name: "Frontend Development",
    description:
      "Lorem ispum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    href: "",
  },
  {
    number: 2,
    name: "Backend Development",
    description:
      "Lorem ispum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    href: "",
  },
  {
    number: 3,
    name: "UI/UX Design",
    description:
      "Lorem ispum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    href: "",
  },
  {
    number: 4,
    name: "Digital Marketing",
    description:
      "Lorem ispum dolor sit amet consectetur adipisicing elit. Quo, voluptatem.",
    href: "",
  },
];

function Servicespage() {
  return (
    <section className="mim-h-[80vh] flex flex-col justify-center xl:py-0  py-11">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.5,
              duration: 0.5,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col items-cejustify-center group"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-4xl font-extrabold text-outline transition-all-duration-500 text-transparent group-hover:text-outline-hover">{`0${service.number}`}</div>
                  <Link href={service.href}
                  className="w-[69px] h-[69px] flex items-center rounded-full bg-white justify-center group-hover:bg-accent transition-all duration-500 hover:rotate-45">
                    <BsArrowDownRight className="tex-primary text-2xl" />
                  </Link>
                </div>
                <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500  ">{service.name}</h2>
                <p className="text-[14px] text-white/60 mb-4">{service.description}</p>
                
                <div className="border-b border-accent/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Servicespage;
