import React, { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const dispatch = useDispatch();

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an api call to openai(GPT API) to get the movie results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, movies comma saperate like the example result given ahed. Example Result: Dune 2, Shole, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("Error fetching");
    }

    console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(","); //This will gve array of movie.

    //for each movie i will  search TMDB API
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder="Whats would you like to watch today?"
          className="p-4 m-4 bg-white col-span-9"></input>
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
