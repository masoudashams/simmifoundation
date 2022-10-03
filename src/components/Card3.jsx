import clsx from 'clsx'
import { Link } from 'react-router-dom'
import SizedBox from './SizedBox'

function Card3({ item, className = "", index = 0 }) {
 
  return <div className={clsx(
    ' container flex flex-col  w-full max-w-sm border border-black  overflow-hidden shadow-lg rounded mt-8 mx-10',
    className,
    index !== 0 && 'ml-9 '
  )}>



  <img src={item.image} className="h-full w-full object-cover border-none " />
    <div className='text-center my-8 mx-10  rounded-t-md'>
      <h1 className='text-center text-lg font-semibold text-orange-500'>{item.title}</h1>
      <SizedBox height={15} />
      <p className='text-sm text-gray-500'>{item.desc}</p>

      <Link to="/#" state={{
        ...item,
        description: item.desc
      }}>
        <button 
        className='flex cursor-pointer mx-3 float-right py-11'>
          <h2 className=' text-lg text-gray-700 uppercase  '>Read more</h2>
          <svg width="20" height="20" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4697 2.177L33.1781 15.8853L19.4697 29.5937M1.84473 15.8853H33.1781H1.84473Z" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Link>
     

    </div>

</div>
    
  
}

export default Card3