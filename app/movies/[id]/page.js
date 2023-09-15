
'use client'

import {useState, useEffect} from 'react'
import Aside from "../Aside";
import SideBar from "../../components/Sidebar";
import { FaStar } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs'; 

const MovieDetails = ({params}) => {
    const [movieDetails, setMovieDetails] = useState([])
    const [videos, setVideos] = useState([])
    const videoID = params.id;

    
    
  function loadMovie() { 
    fetch(`https://api.themoviedb.org/3/movie/${videoID}?api_key=b793e692c78d76710fe708c20f2d6e82`)
      .then(response => response.json())
      .then(result => {
          setMovieDetails(result)
          console.log(movieDetails)
      })
      .catch(error => console.log('error', error));
  }

  
  
  useEffect(() =>{
      loadMovie()
      fetch(`https://api.themoviedb.org/3/movie/${videoID}/videos?api_key=b793e692c78d76710fe708c20f2d6e82`)
          .then(response => response.json())
          .then(result => {
              setVideos(result.results[0])
            //   console.log(videos)
          })
          .catch(error => console.log('error', error));
    // loadVideos() 
}, [])
  return (
    <div className="w-full overflow-x-hidden ">
      <SideBar />
   
          
        <div className='w-full px-10 md:px-36 ml-10'>
            <div id="single-photos">
                
                {!videos.key ? <h5 color='#fff'>No Video Available</h5> : <iframe className="rounded-3xl" width="100%" height="500" src={`https://www.youtube.com/embed/${videos.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>}
            </div>
          
            <div className='p-2 flex flex-col md:flex-row gap-2 mt-2 md:place-items-center justify-between '>
              <div className='gap-2 flex flex-col md:flex-row justify-start md:justify-center md:place-items-center align-middle'>
                <h2 className="text-lg  font-bold flex md:place-items-center" data-testid="movie-title">{movieDetails.title || movieDetails.name}</h2>
                    <div className='flex flex-row'>
                      <p className='font-bold flex justify-center place-items-center align-middle'><BsDot /></p> 
                    <p className=" flex place-items-center" data-testid="movie-release-date">
                      {movieDetails.release_date}
                    </p> 
                    <p className='font-bold flex justify-center place-items-center align-middle'><BsDot /></p>
                    <p className='flex justify-center place-items-center align-middle  ' data-testid="movie-runtime">{movieDetails.runtime}mins</p>
                    <p className='font-bold flex justify-center place-items-center align-middle'><BsDot /></p>
                    <p>
                    {movieDetails.genres ? movieDetails.genres.map((item, id)=>(
                      <span className='border px-3 py-1 rounded-full text-rose-700 ml-3 text-xs font-semibold ' key={id}>{item.name}</span>
                    )) : 'loading...'}
                    </p> 
                    </div>

              </div>
             
          <div className='flex  '> </div>
            <p className="mb-3 flex place-items-center  ">
              <span className="font-semibold mr-1 text-[#faf760]"><FaStar/></span>
              {movieDetails.vote_average} 
            </p>
          </div>
          
            <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6 w-12/12"> 
             <div className="p-2 col-span-2">   
                <p className="text-lg mb-3 ">
                  <span className="font-semibold mr-1" data-testid="movie-overview">Overview:</span>
                  {movieDetails.overview}
                </p>
          <div className='w-full lg:w-1/5 flex flex-col p-2'>
            <h5 className='font-bold '>Produced by:</h5>
                     
                      {!movieDetails.production_companies ? "Loading" : movieDetails.production_companies.map((company, id) => (
                          <p className='text-rose-700' key={id}>{company.name}</p>
                      ))}
            </div>
            <button className='bg-rose-700 text-white rounded-md py-3 px-8 flex place-items-center gap-2 mb-3 w-auto '>Top rated movies #{movieDetails.popularity}</button>
        </div> 
        <Aside />
        </div>
        </div>
        </div>
    
   
  )
}

export default MovieDetails;