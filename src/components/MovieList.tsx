import React from "react";
import Movie from "../ts/types/types";
import SearchBar from "./SearchBar";
import MovieItem from "./MovieItem";

const MovieList = ({
  movieList,
  setQuery,
  setMovieId,
}: {
  movieList: Movie[];
  setQuery: Function;
  setMovieId: Function;
}) => {
  return (
    <div className="searchPane">
      <SearchBar setQuery={setQuery} />
      {movieList.map((movie: Movie) => {
        return (
          <MovieItem
            title={movie.title}
            id={movie.id}
            setMovieId={setMovieId}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
