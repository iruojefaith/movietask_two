'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Search from "./Search";

const Nav = ( {handleChange}) => {


  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  

  return (
    <>
      <nav className="w-full py-3">
        <div className=" grid grid-flow-col-dense grid-cols-2 gap-3 items-start md:items-center ">
        <Link href="/" className="inline-flex items-center p-2 mr-4 gap-2 ">
            <Image src="/tv.png" alt="logo" width={50} height={50}/> {''}
            <span className="text-xl text-white font-bold uppercase tracking-wide font-garamond">
              MovieBox
            </span>
          
        </Link>
        <div className=" md:col-span-2 flex md:flex-row gap-10 mt-2 md:mt-0 md:items-center flex-col-reverse">
          <Search handleChange={handleChange}/>
          <div className="flex gap-3">
            <button className="text-white">SignIn</button> 
            <button
          className=" cursor-pointer inline-flex p-3 bg-rose-700 rounded-full text-white ml-auto hover:text-[#8A8A8A] outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
          </div>
         
        </div>
        
        <div
          className={`${
            active ? "" : "hidden"
          } w-full md:gap-16`}
        >
        
          <div className="lg:flex flex-col align-middle items-center flex absolute bg-white w-screen h-44 z-10 text-rose-700 ">
            <Link href="/"
             className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  font-normal items-center justify-center  hover:text-[#8A8A8A] ">
                Home
            </Link>
            <Link href="/shop"
               className="lg:inline-flex lg:w-auto w-full px-3 py-2 roundedfont-normal items-center justify-center  hover:text-[#8A8A8A]">
                Favorites
              
            </Link>
            

          </div>
            
        </div>
      

    
    </div>
      </nav>
    </>
  );
};

export default Nav;