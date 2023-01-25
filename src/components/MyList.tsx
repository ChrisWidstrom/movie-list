import React, { useState } from "react";
import Movie from "../ts/types/types";
import trashbinImage from '../images/trash.png';

const MyList = ({ myList, removeMovieFromMyList }: { myList: Movie[], removeMovieFromMyList: Function }) => {
  const [movie, setMovie] = useState<Movie>({
    id: 12345,
    title: "The Karate Kid",
    poster_path: "/1mp4ViklKvA0WXXsNvNx0RBuiit.jpg",
    backdrop_path: "/4TRL9t8yOQ74j7jI4dGy7C9OVvC.jpg",
    release_date: "1984-06-22",
    runtime: 126,
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Family" },
      { id: 3, name: "Drama" },
    ],
    overview:
      "Daniel, a fatherless teenager, arrives in Los Angeles and becomes the object of bullying by a gang of karate students when he strikes up a relationship with Ali, the gang leader’s ex-girlfriend, so Daniel asks Miyagi, a master of martial arts, to help him learn karate.",
  });

  const removeMovieFromList = (movieId: Number) => {
    removeMovieFromMyList(movieId);
  }

  return (
    <div>
      <div className="movieDetails">
        <div className="movieDetailsColumn1">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="movie poster"
            className="poster"
          />
        </div>

        <div className="movieDetailsColumn2">
          <h1 className="movieHeading">{movie.title}</h1>
          <div className="movieInfo">
            <span>
              { `${movie.release_date.slice(0, 4)} • ${movie.runtime} min`}
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
        </div>
      </div>

      <div className="myListContainer">
        <h1 className="myListHeader">My list</h1>
        <ul className="myList">
            { myList.map( movie => {
                return (
                <div className="myListRow">
                    <li onClick={() => { setMovie(movie) }} className="myListItem">{movie.title}</li>
                    <button type="button" className="removeFromMyListButton" onClick={() => removeMovieFromList(movie.id)}><img src={trashbinImage} alt="buttonpng" className="trashImage"/></button>
                </div>
                )
            })}
        </ul>
      </div>
    </div>
  );
};

export default MyList;
