import React, { useState, useEffect, useRef } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import "./App.css";


const App = () => {

  let movies = useRef([{}]);
  const [query, setQuery] = useState('');
  const [movieId, setMovieId] = useState('1885');

  const apiKey = "2b8c078972f734dba09ea9a3fcdfdf58";

  // The input field in the SearchBar component updates the query state. useEffect is then called to fetch a list of movies from the server.

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then((response) => {
        movies.current = response.data.results;
      })
      .catch((err) => `There was an error fetching the data. Details: ${err}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, movieId]);

  // The updateQuery function is passed down to SearchBar and is called when the search input text field is updated.

  const updateQuery = (query: string) => {
    if (query) {
      setQuery(query);
    } else {
      movies.current =[{id: 0, original_title: "Please enter a search keyword"}];
    }
  }

  // The updateMovieId function takes an Id and updates the MovieId state. This function is passed down to the MovieList component as a props.
  const updateMovieId = (id:string) => {
    setMovieId(id);
  }

  return (
    <div className="mainWrapper">
      <aside>
        <MovieList movieList={movies.current} setQuery={updateQuery} setMovieId={updateMovieId}/>
      </aside>

      <main>
        <MovieDetails movieId={movieId}/>
      </main>
    </div>
  );
};

export default App;
