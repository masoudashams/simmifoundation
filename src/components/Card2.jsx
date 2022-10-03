import clsx from 'clsx'
import { Link } from 'react-router-dom'
import SizedBox from './SizedBox'

function Card2({ item, className = "", index = 0 }) {
 
  return <div className={clsx(
    ' container flex flex-col  w-full max-w-sm border border-black  overflow-hidden shadow-lg rounded mt-8 mx-10',
    className,
    index !== 0 && 'ml-9 '
  )}>



    <div className='text-center my-8 mx-10  rounded-t-md'>
      <h1 className='text-center text-lg font-semibold text-orange-500  '>{item.title}</h1>
      <SizedBox height={15} />
      <div className='border-b mt-5 '></div>
      <p className='text-sm text-white mt-10'>{item.desc}</p>

      <Link to="/#" state={{
        ...item,
        description: item.desc
      }}>
        <button 
        className='flex cursor-pointer mx-3 float-right mt-12'>
          <h2 className=' text-lg text-white uppercase '>{item.btn}</h2>
          <svg width="20" height="20" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4697 2.177L33.1781 15.8853L19.4697 29.5937M1.84473 15.8853H33.1781H1.84473Z" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        
      </Link>
     

    </div>

</div>
    
  
}

export default Card2