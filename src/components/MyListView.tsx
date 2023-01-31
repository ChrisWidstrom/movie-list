import React, { useState } from "react";
import Movie from "../ts/types/types";
import MyListViewMovieDetails from "./MyListViewMovieDetails";
import MyListViewMyList from "./MyListViewMyList";


const MyListView = ({
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

  // const updateMovie = (movie: Movie) => {
  //   setMovie(movie);
  // }

  return (
    <div className="main">
      <div className="movieDetails">
        <div className="movieDetailsColumn1">
          <MyListViewMovieDetails movie={movie}/>
        </div>

        <div className="movieDetailsColumn2">
          <MyListViewMyList myList={myList} setMovie={setMovie} removeMovieFromList={removeMovieFromMyList}/>
        </div>
      </div>
    </div>
  );
};

export default MyListView;
