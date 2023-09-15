
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import {BiLogoTwitter, BiLogoYoutube} from 'react-icons/bi';

const Footer = () => {
    const today = new Date();
return (
    <div className="flex h-60 min-w-full flex-col gap-4 items-center justify-center px-4 md:px-24 relative text-gray-500">
      <div className='flex gap-3'>
        <FaFacebookSquare/>
        <FaInstagram/>
        <BiLogoTwitter/>
        <BiLogoYoutube/>

    </div>  
    <div className='flex gap-6 font-bold text-sm md:text-base'>
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
    </div>
        <p className='text-xs md:text-sm'>© {today.getFullYear()} MovieBox by Iruoje Faith  </p>
    </div>
    
  )
}

export default Footer;