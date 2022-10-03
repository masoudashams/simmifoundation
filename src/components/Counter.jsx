import React from 'react';
import CountUp from 'react-countup';

function Counter() {
  return (
    <div  className='flex my-8 flex-wrap justify-center md:justify-evenly items-center'>
    
       <div className='bg-orange-500 h-24 w-72 text-center m-8 '>
       <h1>
        <CountUp start={0} end={10} duration={2} delay={0}/>
        +
       </h1>
       <h1 className='text-black mt-1 '> Countries </h1>
       </div>
        
       <div className='bg-orange-500 h-20 w-72 text-center m-8'>
       <h1>
        <CountUp start={0} end={150} duration={2} delay={0}/>
        +
       </h1>
       <h1> Countries </h1>
       </div>
      
       <div className='bg-orange-500 h-20 w-72 text-center m-8'>
       <h1>
        <CountUp start={0} end={10000} duration={2} delay={0}/>
        +
       </h1>
       <h1> Countries </h1>
       </div>
      
       <div className='bg-orange-500 h-20 w-80 text-center m-8'>
       <h1>
        <CountUp start={0} end={20} duration={2} delay={0}/>
        +
       </h1>
       <h1> Countries </h1>
       </div>
    
       <div className='bg-orange-500 h-20 w-80 text-center m-8'>
       <h1>
        <CountUp start={0} end={500000} duration={2} delay={0}/>
        +
       </h1>
       <h1> Countries </h1>
       </div>
    </div>
    
  )
}

export default Counter