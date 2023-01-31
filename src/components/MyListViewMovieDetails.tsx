import React from "react";
import Movie from "../ts/types/types";

const MyListViewMovieDetails = ({ movie }: { movie: Movie }) => {
  return (
    <>
      <img
        src={
          movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            : "./img/poster-na.jpg"
        }
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
    </>
  );
};

export default MyListViewMovieDetails;
