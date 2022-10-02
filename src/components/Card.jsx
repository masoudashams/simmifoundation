import clsx from 'clsx'
import { Link } from 'react-router-dom'
import SizedBox from './SizedBox'
import {useEffect} from 'react';

function Card({ item, className = "", index = 0 }) {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return <div className={clsx(
    'flex flex-col min-h-[480px] h-full min-w-[340px] max-w-sm border border-black ',
    className,
    index !== 0 && 'ml-8'
  )}>

    <img src={item.image} className="h-80 w-full object-cover border-none" />
    <div className='text-left p-4'>
      <h1 className='font-utopia'>{item.title}</h1>
      <SizedBox height={15} />
      <p className='font-raleway'>{item.desc}</p>

      <Link to="/event" state={{
        ...item,
        description: item.desc
      }}>
        <button onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                  }}
        className='flex cursor-pointer mt-3'>
          <h2 className='font-raleway font-bold text-2xl uppercase mr-3'>Read more</h2>
          <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4697 2.177L33.1781 15.8853L19.4697 29.5937M1.84473 15.8853H33.1781H1.84473Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Link>


    </div>
  </div>
}

export default Card