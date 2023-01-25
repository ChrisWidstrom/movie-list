import React from "react";

const MovieItem = ({title, setMovieId, id}:{title: String; setMovieId: Function; id: Number}) => {

  /**
   * updateMovieId
   * This function calls the setMovieId in the App component and passes it the movie ID as an argument.
   * 
   * @param id - Passed down as a prop from the App component.
   * @returns - Not applicable.
   *
   */

  const updateMovieId = () => {
    setMovieId(id);
  };

  return (
    <div className="movieName">
      <p onClick={updateMovieId}>{title}</p>
    </div>
  );
};

export default MovieItem;
