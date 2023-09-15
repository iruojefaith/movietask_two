
import Image from 'next/image'; 
import {TfiMenuAlt} from 'react-icons/tfi';
import {BiSolidCuboid} from 'react-icons/bi';

const Aside = () => {
  return (
    <div>
         <button className='bg-rose-700 text-white rounded-md py-3 px-8 flex place-items-center gap-2 mb-3 '><BiSolidCuboid />See Showtimes</button>
        <button className='bg-rose-50 rounded-md py-3 px-8 flex place-items-center gap-2'><TfiMenuAlt />More watch options</button>
        <Image src="/aside.png" alt="logo" width={400} height={400} className='mt-3'/>
    </div>
  )
}

export default Aside;