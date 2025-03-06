import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black w-screen">
        <div className="-mt-52 pl-10 relative z-20 ">
          <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
