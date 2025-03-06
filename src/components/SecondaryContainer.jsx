import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MyLink from "./MyLink";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black w-screen">
        <div className="mt-0 md:mt-0 lg:-mt-52 pl-4 md:pl-4 relative z-20 pb-10 ">
          <MovieList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        </div>
        <MyLink />
      </div>
    )
  );
};

export default SecondaryContainer;
