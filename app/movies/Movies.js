'use client'
import React, { useEffect, useState } from "react";
import MovieDisplay from './MovieDisplay';
import Header from "../Home/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



const Movies = () => {
  const [displaymovies, setdisplayMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=b793e692c78d76710fe708c20f2d6e82&page=${pageNo}`
        );
        const data = await res.json();
        console.log(data)
        setMovies(data?.results);
        setdisplayMovies(data?.results);
        const moviesWithFavorites = res.data.map((movie) => ({
          ...movie,
          isFavorite: false,
        }));

        setMovies(moviesWithFavorites);
        setdisplayMovies(moviesWithFavorites);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
      )
    );
  };

  useEffect(() => {
    const updatedFavorites = movies.filter((movie) => movie.isFavorite);
    setFavorites(updatedFavorites);
  }, []);

  const handleChange = (e) => {
    setLoading(true);
    const val = e.target.value;
    const matchingMovies = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(val.toLowerCase())
    );
    setdisplayMovies(matchingMovies);
    setLoading(false);
  };

  const sliceTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    }
    return title.slice(0, maxLength) + "...";
  };

  return (
    <div className=" justify-center align-center">
      <main className="bg flex h-[50rem] min-w-full flex-col items-center justify-between px-4 md:px-24 relative">
          <Nav handleChange={handleChange}/>
          <Header />
      </main>
          <MovieDisplay
            toggleFavorite={toggleFavorite}
            loading={loading}
            displaymovies={displaymovies}
            sliceTitle={sliceTitle}
          />
          <Footer />
      </div>
  );
};

export default Movies;
