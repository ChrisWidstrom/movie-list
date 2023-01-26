import React, { useState } from "react";
import Movie from "../ts/types/types";
import trashbinImage from "../images/trash.png";

const MyList = ({
  myList,
  removeMovieFromMyList,
}: {
  myList: Movie[];
  removeMovieFromMyList: Function;
}) => {
  // The movie state is initialized with a movie object to create a default view if the list is empty.
  // This will be solved more elegantly in the future.

  const [movie, setMovie] = useState<Movie>({
    id: 120467,
    title: "The Grand Budapest Hotel",
    poster_path: "/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    backdrop_path: "/xHDynIimfsgj0ZOs0j5ma8v1vmM.jpg",
    release_date: "2014-02-26",
    runtime: 100,
    genres: [
      { id: 1, name: "Comedy" },
      { id: 2, name: "Drama" },
    ],
    overview:
      "A murder case of Madam D. With enormous wealth and the most outrageous events surrounding her sudden death!",
  });

  /**
   * removeMovieFromList
   * This function calls the removeMovieFromMyList function in the App component.
   *
   * @param id - The id from the Movie object.
   * @returns - Not applicable.
   *
   */

  const removeMovieFromList = (movieId: Number) => {
    removeMovieFromMyList(movieId);
  };

  return (
    <div className="main">
      <div className="movieDetails">
        <div className="movieDetailsColumn1">
          
          <img
            src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : './img/poster-na.jpg'}
            alt="movie poster"
            className="poster"
          />

          <h1 className="movieHeading">{movie.title}</h1>
          <div className="movieInfo">
            <span>
              {`${movie.release_date.slice(0, 4)} • ${movie.runtime} min`}
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

          <div className="myListContainer">
            <p>{movie.overview}</p>
          </div>
        </div>

        <div className="movieDetailsColumn2">
          <h1 className="myListHeader">My list</h1>
          <ul className="myList">
            {myList.map((movie) => {
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
                    <img
                      src={trashbinImage}
                      alt="buttonpng"
                      className="trashImage"
                    />
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyList;
