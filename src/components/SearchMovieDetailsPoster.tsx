import React from "react";

const SearchMovieDetailsPoster = ({ path }: { path: String }) => {
  return (
    <>
      <img
        src={
          path
            ? `https://image.tmdb.org/t/p/w500/${path}`
            : "./img/poster-na.jpg"
        }
        alt="movie poster"
        className="poster"
      />
    </>
  );
};

export default SearchMovieDetailsPoster;
