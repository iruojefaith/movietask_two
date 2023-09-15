'use client'

import Link from 'next/link';
import Image from "next/image";
import {GoHome} from 'react-icons/go';
import {BiCameraMovie} from 'react-icons/bi';
import {FaBars, FaWindowClose} from 'react-icons/fa';
import {RiMovieLine} from 'react-icons/ri';
import {HiOutlineCalendarDays} from 'react-icons/hi2';
import {TbLogout} from 'react-icons/tb';
import { useState } from 'react';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleSidebar() { setIsOpen(!isOpen) }

    const sideBarMenuItems = [
        {
            icon: <GoHome/>,
            name: 'Home',
            path: '/'
        },
        {
            icon: <BiCameraMovie/>,
            name: 'Movies',
            path: 'Movies'
        },
        {
            icon: <RiMovieLine/>,
            name: 'Tv Series',
            path: 'Tv Series'
        },
        {
            icon: <HiOutlineCalendarDays/>,
            name: 'Upcoming',
            path: 'Upcoming'
        }
    ]
  return (
    <aside className={`border rounded-r-3xl bg-white w-[${isOpen ? '40%' : '50px'}] md:w-[25%] lg:w-[12%] fixed top-0 left-0 p-2 md:px-4 lg:py-8 lg:px-5 z-[10000] h-screen`}>
       <div className={`${isOpen ? 'hidden' : 'block'} md:hidden mt-4`} onClick={toggleSidebar} ><FaBars/></div>
       <div className={`${!isOpen ? 'hidden' : 'block'} md:block`}>
            <div className='flex justify-between items-center'>
            <Image src="/tv.png" alt="logo" width={30} height={30}/>
                    <h3 className='text-black font-medium'>MovieBox</h3>
                    <h4 onClick={toggleSidebar} className='block text-rose-600 md:hidden'><FaWindowClose/></h4>
            </div>
            <br />
            <div>
                
                <menu className='flex flex-col menu-items py-4'>
                    {sideBarMenuItems.map((menuItem) =>
                    <Link href={menuItem.path} className='flex items-center gap-2 hover:ml-2 my-4'><span>{menuItem.icon}</span> <h6>{menuItem.name}</h6> </Link>
                    )}
                </menu>
                <br />
            
                <div className='bg-rose-50 rounded-2xl px-2 py-8'>
                    <p className='text-[.7rem] mb-2'>Play movie quizes
                    <br/>and earn <br/>
                    free tickets
                    </p>
                    <p className='text-[.6rem]  my-2'>50k people are playing now</p>
                    <button className='mt-2 text-rose-700 text-xs bg-rose-200 rounded-xl py-2 px-3 '>Start playing</button>
                </div>
                
                <br />
                <h5 className='flex place-items-center gap-2'><TbLogout/>Log out</h5>
            </div>
       </div>
    </aside>
  )
}

export default SideBar;