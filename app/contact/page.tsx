"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+923005109219",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "amjaadrana@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Address",
    value: "123 Main Street, Toba Tek Singh, Pakistan",
  },
];

import { motion } from "framer-motion";

function Contactpage() {
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
      className="py-6"
    >
      <div className="container mx-aut0">
        <div className="flex flex-col md:flex-row gap-4">
          {/* form */}
          <div className="xl:w-[55%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-10 bg-[#2a3041] rounded-xl ">
              <h3 className="text-2xl font-bold text-accent">
                Let,s Work Together
              </h3>
              <p className="text-gray-200">
                Please fill out the form below to get in touch with me.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
                {/* <Input type="subject" placeholder="Subject" />
              <Textarea placeholder="Message" /> */}
                {/* <Button>Send Message</Button> */}
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* <SelectLabel>Select a Services</SelectLabel> */}
                    <SelectItem value="service-1">Web Development</SelectItem>
                    <SelectItem value="service-2">UI/UX Design</SelectItem>
                    <SelectItem value="service-3">Digital Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text */}
              <Textarea
                className="h-40"
                placeholder="Type Message Here Please. "
              />
              <Button size="md" className="max-w-[155px]">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex  items-center  xl:justify-end order-1 xl:order-none mb-7 xl:mb-0">
            <ul className="flex flex-col gap-6 xl:gap-8">
              {info.map((item, index) => {
                return (
                  <li key="index" className="flex gap-4">
                    <div className="h-10 w-10 xl:h-16 xl:w-16 flex justify-center items-center text-accent text-2xl bg-[#2a3041] rounded-md">
                      {item.icon}
                    </div>
                    <div className="">
                      <h4 className="text-lg font-semibold">{item.label}</h4>
                      <p>{item.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contactpage;
