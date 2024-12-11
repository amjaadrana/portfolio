import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {FiDownload} from 'react-icons/fi';
import { FaGithub ,FaLinkedinIn ,FaTwitter ,FaInstagram ,FaUpwork } from "react-icons/fa6";
import Photo from '@/components/Photo';
import Stars from '@/components/Stars';

const Home = () => {
  return (
    <section className='h-full'>
      <div className="container max-pauto h-full">
        <div className="flex flex-col xl:flex-row items-center
         justify-between xl:pb-4 ">
          {/* left text*/}
        <div className='xl:left text-center'>
          <span className='text-xl text-secondary'>Full Stack Web <br /><span className='text-accent'> Developer</span></span>
          <h1 className='h1'>
            Hi, I'm <br /><span className='text-accent'>Amjaad Rana</span>
          </h1>
          <p className='max-w-sm mb-4 text-slate-200'>           
            I believe web development is about creating efficient, user-friendly, and scalable solutions. I focus on detail and write clean, maintainable code to ensure both the front-end and back-end of every project perform at their best.
          </p>
        {/* <div className='gap-4 items-center'> */}
        <div className='flex flex-col items-center justify-center xl:flex-row gap-3'>
          <Button 
            variant='outline'
            size = "md"
            className="upercase flex items-center gap-2"
            >
            <FiDownload className='mr-2 h-4 w-4' />
            Download CV
          </Button>
        <div className='flex items-center gap-2'>
        <Link href='https://github.com/AmjaadRana'  
        target="_blank" rel="noopener noreferrer"     
        className='border border-accent text-white p-1 uppercase items-center gap-2 rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500'
        >
        <FaGithub className='h-4 w-4'/>                      
        </Link>
        <Link href='https://www.linkedin.com/in/amjaad-rana-29107a1a5/' 
         target="_blank" rel="noopener noreferrer"    
        className='border border-accent text-white p-1 uppercase items-center gap-2 rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500'
        >        
        <FaLinkedinIn className='h-4 w-4'/>
        </Link>
        <Link href='https://www.upwork.com/nx/find-work/best-matches'  
        target="_blank" rel="noopener noreferrer"     
        className='border border-accent text-white p-1 uppercase items-center gap-2 rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500'
        >
        <FaUpwork className='h-4 w-4'/>                      
        </Link>
        <Link href='https://www.upwork.com/nx/find-work/best-matches'  
        target="_blank" rel="noopener noreferrer"     
        className='border border-accent text-white p-1 uppercase items-center gap-2 rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500'
        >
        <FaInstagram className='h-4 w-4'/>                      
        </Link>
        <Link href='https://github.com/AmjaadRana'  
        target="_blank" rel="noopener noreferrer"     
        className='border border-accent text-white p-1 uppercase items-center gap-2 rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500'
        >
        <FaTwitter className='h-4 w-4'/>                      
        </Link>

        {/* </div> */}
        </div>
        </div>
        </div>       
        {/* right image */}
        <div className='order-first xl:order-last xl:mb-0'>
          <Photo />
        </div>
        </div>
      </div>
      <Stars />
    </section>
  )
}

export default Home
