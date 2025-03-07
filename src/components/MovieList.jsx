import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import MovieCard from "./MovieCard";
import "@splidejs/splide/dist/css/splide.min.css";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 pt-10 text-white">{title}</h1>
      <Splide
        options={{
          type: "slide", // Can be 'loop' or 'slide'
          perPage: 7, // Number of visible slides
          perMove: 5, // How many slides to move on navigation
          gap: "", // Space between slides
          pagination: false, // Hide pagination dots
          arrows: true, // Show navigation arrows
          drag: "free", // Allow free dragging
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            640: { perPage: 2 },
          },
        }}
        className="w-full shadow-2xl ">
        {movies?.map((movie) => (
          <SplideSlide key={movie.id}>
            <MovieCard posterPath={movie.poster_path} />
          </SplideSlide>
        ))}

      </Splide>
    </div>
  );
};

export default MovieList;
