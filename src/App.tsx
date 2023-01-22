import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import axios from "axios";
import "./App.css";


const App = () => {

  const [movies, setMovies] = useState<any[]>([]);
  const [query, setQuery] = useState('fire');
  const [movieId, setMovieId] = useState('139567');

  const apiKey = "2b8c078972f734dba09ea9a3fcdfdf58";

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
  }, [query]);

  const updateQuery = (query: string) => {
    if (query) {
      setQuery(query);
    } else {
      setMovies([{ id: 0, original_title: "Please enter a search keyword"}]);
    }
  }

  const updateMovieId = (id:string) => {
    setMovieId(id);
    console.log(`Movie ID updated to: ${movieId}`)
  }

  return (
    <div className="mainWrapper">
      <aside>
        <MovieList movieList={movies} setQuery={updateQuery} setMovieId={updateMovieId}/>
      </aside>

      <main>
        <MovieDetails movieId={movieId}/>
      </main>
    </div>
  );
};

export default App;
