import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const MovieDetails = ({
  movieId,
  addToList,
}: {
  movieId: Number;
  addToList: Function;
}) => {
  const button = useRef<HTMLButtonElement>(null);

  // The movie state is initialized with a movie object to create a default view if the list is empty. This will be solved more elegantly in the future.
  const [movie, setMovie] = useState({
    title: "The Karate Kid",
    poster_path: "/1mp4ViklKvA0WXXsNvNx0RBuiit.jpg",
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

  /**
   * useEffect
   * Fetches a list of movies from the API using the movie id passed into the Component as a prop.
   *
   * @param movieId - The Id of the movie.
   * @param setMovie - State function to update the movie object.
   * @returns - Not applicable.
   *
   */

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2b8c078972f734dba09ea9a3fcdfdf58&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => `Error description: ${err}`);

    updateButtonText("Add to list");
  }, [setMovie, movieId]);

  /**
   * updateButtonText
   * When the 'Add to list' button is pressed the button title is changed to 'Added to list' to give the user visual feedback of the event.
   *
   * @param text - Text to add to button title
   * @returns - Not applicable.
   *
   */

  const updateButtonText = (text: String) => {
    if (button.current !== null) {
      button.current.innerText = `${text}`;
    }
  };

  /**
   * addToMyList
   * This function adds the movie to the MyList state in App.tsx when the 'Add to list' button is clicked.
   * After the list has been updated the title of the button is changed to 'Added to list'
   *
   * @param - Not applicable
   * @returns - Not applicable.
   *
   */

  const addToMyList = () => {
    addToList(movie);
    updateButtonText("Added to list");
  };

  return (
    <div className="movieDetails">
      <div className="movieDetailsColumn1">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt="movie poster"
          className="poster"
        />
      </div>

      <div className="movieDetailsColumn2">
        <h1 className="movieHeading">{movie.title}</h1>
        <div className="movieInfo">
          <span>
            {movie.release_date.slice(0, 4)} {" • "} {movie.runtime} min
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
          ref={button}
          className="addButton"
          onClick={addToMyList}
        ></button>
      </div>
    </div>
  );
};

export default MovieDetails;
