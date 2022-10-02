import React from "react";

import Slider from "../components/Slider";

import { Link, useLocation } from 'react-router-dom';

import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import Card from "../components/Card";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <motion.div>
      
        

        <motion.div>
          <span className="text-black ">
            Smart India Multi Management Institute!   स्मार्ट इंडिया
            बहुद्देश्यीय प्रबन्धन संस्थान!   Registration number : 085953/2020  
            Niti Aayog (Govt. Of India ) Unique Id : HR/2020/0258148
          </span>
        </motion.div>

        
 

    
      <Slider /> 


      <div className='bg-[#212529] text-white  flex justify-between items-center mx-w-[1140px] px-4 border-b-2'>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 1, scale: 1 }}
        transition={{
          type: "fade-right",
          stiffness: 260,
          damping: 20
        }}>
       
         <div className='container mx-auto flex flex-col items-center text-center text-white px-44'>
         <h1 className='mb-2  text-[40px] '>Welcome to <span className="text-orange-500">SIMMI</span></h1>
         <p className='mt-2 md:mt-10 text-sm sm:text-xl text-center '>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives. </p>
         </div>
      </motion.div>
     

      <div className="w-[599px]  " >
          <Link to={'/'}>
            <img src={require('../assets/map.png')} alt="MAP" />
          </Link>
        </div>

    </div>

 
    </motion.div>
  );
}

export default Home;
