'use client'
import React, { useEffect, useState } from "react";
import MovieDisplay from './MovieDisplay';
import Header from "../Home/Header";
import Nav from "../components/Nav";


const Movies = () => {
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        const photosWithFavorites = data.map((photo) => ({
          ...photo,
          isFavorite: false,
        }));
        setPhotos(photosWithFavorites);
        setDisplayPhotos(photosWithFavorites);
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

  const toggleFavorite = () => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  };

  useEffect(() => {
    const updatedFavorites = photos.filter((photo) => photo.isFavorite);
    setFavorites(updatedFavorites);
  }, [photos]);

  const handleChange = (e) => {
    setLoading(true);
    const val = e.target.value;
    const matchingPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().startsWith(val.toLowerCase())
    );
    setDisplayPhotos(matchingPhotos);
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
     
        <div className="flex flex-col justify-center items-center min-w-0 break-words w-full mb-6 shadow-lg rounded mx-auto">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div>
                <MovieDisplay
                  toggleFavorite={toggleFavorite}
                  loading={loading}
                  displayPhotos={displayPhotos}
                  sliceTitle={sliceTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Movies;
