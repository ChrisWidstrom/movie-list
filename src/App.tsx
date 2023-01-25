import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import MyList from "./components/MyList";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Movie from "./ts/types/types";
import axios from "axios";
import "./App.css";


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [movieId, setMovieId] = useState<Number>(0);
  const [myList, setMyList] = useState<Movie[]>([]);

  const navigate = useNavigate();
  const apiKey = "2b8c078972f734dba09ea9a3fcdfdf58";

  /**
   * useEffect
   * Fetches a list of movies from the API using a search query.
   *
   * @param query - They keyword passed in from the search text field.
   * @param apiKey - The API key for Themoviedb.org
   * @returns - Not applicable.
   *
   */

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => `There was an error fetching the data. Details: ${err}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, movieId, setMovies]);

  /**
   * updateQuery
   * If the search text field is empty a Movie object is passed to the movie list with the title "Please enter a search keyword". 
   * (This will be solved in a more elgant way.)
   *
   * @param query - The text that is currently in the search text field.
   * @returns - Not applicable.
   *
   */

  const updateQuery = (query: string) => {
    if (query) {
      setQuery(query);
    } else {
      setMovies([{id: 0, title: "Please enter a search keyword", genres: [], runtime: 0, release_date: '', poster_path:'', overview: ''}]);
    }
  }

  /**
   * updateMovieId
   * When a movie is clicked in the search results this function updates the movieId state,
   *
   * @param id - The id of the movie object.
   * @returns - Not applicable.
   *
   */

  const updateMovieId = (id: Number) => {
    navigate('/database');
    setMovieId(id);
  }

  /**
   * addToMyList
   * When the 'Add to list' button is clicked in the Movie Details view this function is called and adds the selected movie to the myList array
   *
   * @param movie - The movie object.
   * @returns - Not applicable.
   *
   */

  const addToMyList = (movie: Movie) => {
    setMyList([...myList, movie]);
  }

  /**
   * addToMyList
   * When the remove button is clicked in the Movie Details view this function is called and removes the selected movie to the myList array
   *
   * @param id - The id of the movie object.
   * @returns - Not applicable.
   *
   */

  const removeMovieFromMyList = (id: Number) => {
    setMyList( oldList => {
      return oldList.filter( movie => movie.id !== id)
    })
  }

  return (
    <div className="container">
        <MovieList movieList={movies} setQuery={updateQuery} setMovieId={updateMovieId}/>
        <Routes>
          <Route path="database" element={<MovieDetails movieId={movieId} addToList={addToMyList}/>} />
          <Route path="/" element={<MyList myList={myList} removeMovieFromMyList={removeMovieFromMyList}/>} />
        </Routes>
    </div>
  );
};

export default App;
