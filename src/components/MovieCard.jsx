import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-50 pr-6 hover:scale-110 rounded-lg transition duration-300">
      <img alt="Movie Card " src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
