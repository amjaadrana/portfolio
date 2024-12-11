'use client';

import Countup from 'react-countup';

const Star = [
    { num: 4 , text: "experience of years" },
  
    { num: 3 , text: "Projects completed" },
  
    { num: 3 , text: "years of experience" },
  
    { num: 50 , text: "Commits on GitHub" },
  ];

const Stars = () => {
  return (
    <section>
        <div className='container mx-auto'>            
        <div className='flex flex-wrap mt-4 ml-6 gap-6 max-w-[600px] max-auto xl:max-w-none'>
            {Star.map((star, index)=> {
                return(
                    <div key={index}
                    className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>                    
                    
                    <Countup 
                    start={0}
                    end={star.num} 
                    duration={4} 
                    delay={2}
                    separator=","
                    className='text-4xl xl:text-6xl text-secondary'
                    />
                    <p className={`"text-sm max-w-[35px]" ${star.text.length} < 15 ? "max-w-[95px] : "max-w-[500px]"`}>{star.text}</p>
                    
                        
                    </div>
                )
            }
            )}
        </div>
        </div>
    </section>
  )
}

export default Stars