import React from 'react'
import SizedBox from './SizedBox'




function Footer() {

  return (
    <div className='w-screen px-2 bg-slate-400   '>
      <div className='container py-8 flex flex-wrap items-center justify-center sm:justify-between mx-auto'>

        <div className='font-raleway w-full sm:w-auto'>
          <h3 className='font-bold font-utopia'>Usful Likns</h3>
          <span className=' underline underline-offset-1'>
            <a className='block' href="#">Estou Refuglado</a>
            <a className='block' href="#">Somamos</a>
            <a className='block' href="#">Free Art Courses</a>
          </span>
        </div>

        <div className='text-center mt-2  w-full sm:w-auto flex flex-col justify-center items-center  space-y-4'>
          <input type="email" placeholder="Email" name="email" className="w-full sm:w-auto md:w-80 px-3 py-2  border shadow-sm bg-slate-400   border-black focus:outline-none  focus:ring-black-500 block  rounded-md sm:text-sm focus:ring-1" />
          <button className=' bg-zinc-900 text-white text-center w-full sm:w-auto px-8 py-1 justify-center'>SUBSCRIBE</button>
        </div>
        <div>

          
          <p className='font-thin'>Cores Do Mundo All Right Reserved©2022</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

