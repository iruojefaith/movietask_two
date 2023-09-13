'use client'


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MovieCard = ({ movie, sliceTitle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  

  const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

  const handleMovieClick = () => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const selectedMovies = allFavorites.find((pic) => pic.id === movie.id);
    let newFave = allFavorites;
    if (selectedMovies) {
      newFave = allFavorites.filter((pic) => pic.id !== movie.id);
      setIsFavorite(false);
    } else {
      setIsFavorite(true);

      newFave.push(movie);
    }
    localStorage.setItem("favorites", JSON.stringify(newFave));
  };

  useEffect(() => {
    const allFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const selectedMovie = allFavorites.find((pic) => pic.id === movie.id);
    if (selectedMovie) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <span className='' key={movie.id}>
      <li className='absolute '>
        <button
          onClick={() => handleMovieClick(movie.id)}
          className={isFavorite ? "favorite" : "absolute p-3 cursor-pointer left-44 md:left-48 "}
        >
          {isFavorite ? (
            <div className="bg-[#ffffff8c] w-6 h-6 rounded-full flex justify-center align-middle place-items-center p-3">
            ❤️
            </div>
          ) : (
            <div className="bg-[#ffffff8c] w-6 h-6 rounded-full flex justify-center align-middle place-items-center ">
               <svg
              xmlns='http://www.w3.org/2000/svg'
              height='1em'
              viewBox='0 0 512 512'
              fill='white'
              
            >
              {" "}
              <path d='M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z' />
            </svg>
            </div>
           
          )}
        </button>
      </li>
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title}  data-testid="movie-poster" />
      <p className='text-gray-400 flex place-items-center my-[1rem] gap-[.2rem] md:gap-[1rem]' data-testid="movie-release-date">
                      {movie.release_date.slice(0,4)} {" "}    
      </p> 
                   
                    
      <span className='card_content '>
        <h2 className='card_title cursor-pointer' data-testid="movie-title">
          <Link href={`movies/${movie.id}`}>{sliceTitle(movie.title, 18)}</Link>
        </h2>
      </span> 
      <p className='flex justify-between place-items-center my-[1rem] gap-[2rem] '>     
          <span className=' flex place-items-center gap-2'>
                <Image src="/imdb.png" alt="imdb logo" width={35} height={10} quality={80}/>
                {movie.vote_average}
           </span>
          <span  className=' flex place-items-center gap-2'>
                <Image src="/tomato.png" alt="imdb logo" width={15} height={15} quality={80}/>
                {movie.vote_count}
          </span>
          
                      
          </p>
          <span className="text-gray-400 text-xs">
            Action,Adventure,Drama
          </span>
    </span>
  );
};

export default MovieCard;