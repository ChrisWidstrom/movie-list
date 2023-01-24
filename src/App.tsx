import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import MyList from "./components/MyList";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Movie from "./ts/types/types";
import axios from "axios";
import "./App.css";


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [movieId, setMovieId] = useState('1885');
  const [myList, setMyList] = useState<Movie[]>([]);

  const apiKey = "2b8c078972f734dba09ea9a3fcdfdf58";

  // The input field in the SearchBar component updates the query state. useEffect is then called to fetch a list of movies from the server.

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

  // The updateQuery function is passed down to SearchBar and is called when the search input text field is updated.

  const updateQuery = (query: string) => {
    if (query) {
      setQuery(query);
    } else {
      setMovies([{id: 0, title: "Please enter a search keyword", genres: [], runtime: 0, release_date: '', poster_path:''}]);
    }
  }

  // The updateMovieId function takes an Id and updates the MovieId state. This function is passed down to the MovieList component as a props.
  const updateMovieId = (id:string) => {
    setMovieId(id);
  }

  const addToMyList = (movie: Movie) => {
    setMyList([...myList, movie]);
  }

  return (
    <div className="container">
        <MovieList movieList={movies} setQuery={updateQuery} setMovieId={updateMovieId}/>
        <Routes>
          <Route path="/" element={<MovieDetails movieId={movieId} addToList={addToMyList}/>} />
          <Route path="/my-list" element={<MyList myList={myList} />} />
        </Routes>
    </div>
  );
};

export default App;
