'use client'
import { AnimatePresence, motion } from "framer-motion"
import React from 'react';
import { usePathname } from "next/navigation";

interface TransitionProps {
  children: React.ReactNode;
// type TransitionProps = {
//   children: React.ReactNode;
}

const Transition: React.FC<TransitionProps> = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
            initial={{ opacity: 1 }}
            animate={{ 
            opacity: 0 ,      
            transition: { delay: 1, ease: "easeInOut" ,duration: 0.4 }}
        }
            // exit={{ opacity: 1 }}
            
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
            {/* </motion.div> */}
        </div>
    </AnimatePresence>
  )
}

export default Transition