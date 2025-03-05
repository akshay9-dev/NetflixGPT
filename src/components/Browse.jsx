import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
  useNowPlayingMovies();
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
