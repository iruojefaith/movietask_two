'use client'
import { useState } from "react";
import Loading from "./Loading";
import MovieCard from "../movies/MovieCard";


const DisplayPagination = ({displaymovies, loading, sliceTitle}) => {

  const ModifiedMoviestate = displaymovies?.slice(
    0,10
  );
  return (
    <>
        {ModifiedMoviestate.length !== 0 ? (
    <div>
  {loading ? (
    <Loading />
  ) :(
    <ul className=' '> 
      <li className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4rem]'>
        {ModifiedMoviestate?.map((movie, key) => {
          return (
            <MovieCard key={key} sliceTitle={sliceTitle} movie={movie} />
          );
        })}
      </li>
    </ul>  
         
  )}
  </div>
  ):(
  <div></div>
  )}
    </>
  )
}

export default DisplayPagination;



