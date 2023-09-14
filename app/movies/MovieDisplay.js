'use client'

import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

import DisplayPagination from "../components/displayPagination";

function MovieDisplay({ displaymovies, loading, sliceTitle, toggleFavorite}) {
  
  const [resorts, setResorts] = useState([]);

  

  //callback function to render cards on and off of favorites page
  function handleFavoriteResort(updatedResort) {
    const updatedResortArray = resorts.map((resort) => {
      if (resort.id === updatedResort.id) {
        return updatedResort;
      } else {
        return resort;
      }
    });
    setResorts(updatedResortArray);
  }
  

 
  return (
    <div className='px-4 md:px-24 -mt-28'>
      <div className="flex flex-row w-full justify-between mb-8 ">
          <h3 className="font-bold text-xl">Featured Movie</h3>
          <button className="text-rose-700 font-semibold flex place-items-center gap-2 cursor-pointer ">See more<FaArrowRight /></button>
        </div> 
   
             <DisplayPagination  displaymovies={displaymovies} loading={loading} sliceTitle={sliceTitle} />
        
             
    </div>
    
  )
  
  }

export default MovieDisplay;