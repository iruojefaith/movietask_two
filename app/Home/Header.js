import React from 'react'
import Image from 'next/image';
import {AiFillPlayCircle} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='absolute px-4 md:px-24 py-24 mt-36 md:mt-20 '>
      <div className=' w-5/6 md:w-3/6 lg:w-2/6'>
        <h1 className='head_text'>John Wick 3 : Parabellum</h1>
        <div className='flex flex-row gap-8 my-6'>
          <div className='flex flex-row gap-2'>
            <Image src="/imdb.png" alt="imdb logo" width={30} height={30} quality={80}/>
          <span className='text-white '>86.0/100</span>
          </div>
          <div className='flex flex-row gap-2'>
              <Image src="/tomato.png" alt="tomato" width={20} height={20} quality={80}/>
          <span className='text-white '>97%</span>
          </div>
        </div>
        <p className='desc'>John Wick is on the run after killing a member of the international
             assassins&lsquo; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
      </div>
        
        <div>
          <button className='rounded-md py-3 px-5 text-white transition-all text-center text-sm flex items-center justify-center border border-rose-700 my-6 bg-rose-700 hover:bg-transparent hover:text-white'>
             <AiFillPlayCircle className='text-white w-5 h-5 mr-2'/>
             WATCH TRAILER
          </button>   
        </div>
    </div>
  )
}

export default Header