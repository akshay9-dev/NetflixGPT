import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
    MainContainer
      -VideoBackground
      -Video title
    Secondary screen
      -Movie list *n
        - movie cards *n
     */}
    </div>
  );
};

export default Browse;
