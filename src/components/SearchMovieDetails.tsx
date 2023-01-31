import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchMovieDetailsPoster from "./SearchMovieDetailsPoster";
import SearchMovieDetailsMovieInformation from "./SearchMovieDetailsMovieInformation";

const SearchMovieDetails = ({ movieId, addToList }: { movieId: Number; addToList: Function }) => {
    
  // The movie state is initialized with a movie object to provide content to the view. 
  // This will be solved more elegantly in the future.

  const [movie, setMovie] = useState({
    id: 1,
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
  }, [setMovie, movieId]);

  /**
   * updateButtonText
   * When the 'Add to list' button is pressed the button title is changed to 'Added to list' to give the user visual feedback of the event.
   *
   * @param text - Text to add to button title
   * @returns - Not applicable.
   *
   */



  /**
   * addToMyList
   * This function adds the movie to the MyList state in App.tsx when the 'Add to list' button is clicked.
   * After the list has been updated the title of the button is changed to 'Added to list'
   *
   * @param - Not applicable
   * @returns - Not applicable.
   *
   */

  return (
    <div className="movieDetails-search">
      <div className="movieDetailsColumn1-search">
        <SearchMovieDetailsPoster path={movie.poster_path} />
      </div>

      <div className="movieDetailsColumn2-search">
        <SearchMovieDetailsMovieInformation movie={movie} addToList={addToList}/>
      </div>
    </div>
  );
};

export default SearchMovieDetails;
