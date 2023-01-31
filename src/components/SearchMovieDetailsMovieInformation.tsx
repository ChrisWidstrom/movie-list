import React, { useRef } from "react";
import Movie from "../ts/types/types";

const SearchMovieDetailsMovieInformation = ({
  movie,
  addToList,
}: {
  movie: Movie;
  addToList: Function;
}) => {

  const button = useRef<HTMLButtonElement>(null);

  const updateButtonText = (text: String) => {
    if (button.current !== null) {
      button.current.innerText = `${text}`;
    }
  };

  const addToMyList = () => {
    addToList(movie);
    updateButtonText("Added to list");
  };

  return (
    <>
      <h1 className="movieHeading">{movie.title}</h1>
      <div className="movieInfo">
        <span>
          <>
            {movie.release_date.slice(0, 4)} {" • "} {movie.runtime} min
          </>
        </span>
      </div>

      <div className="genres">
        {movie.genres.map((genre: any) => {
          return (
            <span className="genre" key={Math.random() * 1000}>
              {genre.name}
            </span>
          );
        })}
      </div>

      <p>{movie.overview}</p>

      <button
        type="button"
        title="Add to list"
        ref={button}
        className="addButton"
        onClick={addToMyList}
      ></button>
    </>
  );
};

export default SearchMovieDetailsMovieInformation;
