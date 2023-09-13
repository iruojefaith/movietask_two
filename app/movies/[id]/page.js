
'use client'

import {useState, useEffect} from 'react'
import Aside from "../Aside";
import SideBar from "../Sidebar";
import {GiClockwork} from 'react-icons/gi'

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
          
            <div className='p-2 flex gap-2 mt-2 place-items-center'>
             <h2 className="text-lg mb-3 font-bold">
                             {movieDetails.title || movieDetails.name}
          </h2>
          <div className='flex gap-2 flex-row justify-center place-items-center '><GiClockwork/>{`${parseInt(parseInt(movieDetails.runtime)/60)}hrs ${parseInt(movieDetails.runtime)%60}mins` } </div>
             <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movieDetails.release_date || movieDetails.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movieDetails.vote_average}
          </p>
          
          </div>
          
            <div className="p-2 grid grid-cols-1 md:grid-cols-3 gap-6 w-12/12">
              
             <div className="p-2 col-span-2">   
                <p className="text-lg mb-3 ">
                  <span className="font-semibold mr-1">Overview:</span>
                  {movieDetails.overview}
                </p>
          <div className='w-full lg:w-1/5 flex flex-col p-2'>
            <h5 className='font-bold '>Produced by:</h5>
                     
                      {!movieDetails.production_companies ? "Loading" : movieDetails.production_companies.map((company) => (
                          <p className='text-rose-700'>{company.name}</p>
                      ))}
            </div>
        </div> 
        <Aside />
        </div>
        </div>
        </div>
    
   
  )
}

export default MovieDetails;