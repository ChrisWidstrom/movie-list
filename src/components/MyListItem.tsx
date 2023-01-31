import React from "react";
import Movie from "../ts/types/types";
import trashbinImage from "../images/trash.png";

const MyListItem = ({ movie, setMovie, removeMovieFromList} : { movie: Movie, setMovie: Function, removeMovieFromList: Function}) => {
  return (
    <div className="myListRow">
      <li
        onClick={() => {
          setMovie(movie);
        }}
        className="myListItem"
      >
        {movie.title}
      </li>
      <button
        type="button"
        className="removeFromMyListButton"
        onClick={() => removeMovieFromList(movie.id)}
      >
        <img src={trashbinImage} alt="buttonpng" className="trashImage" />
      </button>
    </div>
  );
};

export default MyListItem;
