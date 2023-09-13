

import SideBar from "../Sidebar";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b793e692c78d76710fe708c20f2d6e82`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full ">
      <SideBar />
      <div className="px-10 md:pt-8 flex flex-col items-center content-center max-w-6xl mx-auto md:space-x-6">
        <img src={`${IMAGE_URL}${movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}