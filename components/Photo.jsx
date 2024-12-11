"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2,
            duration: .5,
            ease: "easeIn",
          },
        }}
        >
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2.4,
                duration: .5,
                ease: "easeInOut",
              },
            }}            
            className="w-[195px] h-[195px] xl:w-[500px] xl:h-[500px] mix-blend-lighten">
                <Image
                 src="/amjaad.png" 
                 alt="photo" 
                //  width={500} height={500} 
                quality={100}
                fill
                className="object-contain rounded-full"
                 />
            </motion.div>
            <motion.svg 
            className="absolute w-[195px] h-[195px] 
            xl:w-[500px] xl:h-[500px] top-0 left-0"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                initial={{ strokeDasharray: "24  10 10 1" }}
                // animate={{
                //   opacity: 1,
                //   transition: {
                //     delay: 2.4,
                //     duration: .5,
                //     ease: "easeInOut",
                //   },
                  animate = {{
                    rotate: [120, 360],
                    strokeDasharray: ["15 120 20 25", "16 25 92 72" , "4 250 10 0"],
                    strokeDashoffset: [0, 100],
                    
                  }}
                  transition = {{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}

                
                cx="50%" cy="50%" r="50%" fill="transparent"   stroke="#00ff99" strokeWidth="2px" />
              
            </motion.svg>        
        </motion.div>
    </div>
  )
  
  
};

export default Photo;
