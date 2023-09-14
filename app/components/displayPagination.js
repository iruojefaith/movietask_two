'use client'
import { useState } from "react";
import Loading from "./Loading";
import MovieCard from "../movies/MovieCard";
import Pagination from "./Pagination";


const DisplayPagination = ({displaymovies, loading, sliceTitle}) => {

    const [postPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const indexOfLastPage = postPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const ModifiedMoviestate = displaymovies?.slice(
    indexOfFirstPage,
    indexOfLastPage
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
  <div >
      <Pagination
  currentPage={currentPage}
  displaymovies={displaymovies} // to total amount of 100 result
  setcurrentPage={setcurrentPage} // Current Page
  postPerPage={postPerPage} // Post per page
  />
  </div>

  </div>
  ):(
  <div></div>
  )}
    </>
  )
}

export default DisplayPagination;



