'use client'

import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieDisplay({ displayMovies, loading, sliceTitle, toggleFavorite}) {
  
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
          <button className="text-rose-700 font-semibold ">See more</button>
        </div>
      {loading ? (
        <p className='text-[#282727d3] text-[2rem]'>Loading...</p>
      ) : (
        <ul className=' '>
          <li className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem]'>
            {displayMovies?.map((movie, key) => {
              return (
                <MovieCard key={key} sliceTitle={sliceTitle} movie={movie} />
              );
            })}
          </li>
        </ul>
      )}
    </div>
  );
}

export default MovieDisplay;