import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [ movies, setMovies ] = useState<any[]>([]);
  const apiKey = '2b8c078972f734dba09ea9a3fcdfdf58';
  const names = ['Chris', 'Newman'];

  useEffect( () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=Jack+Reacher`)
      .then((response) => {
        console.log(response.data.results)
        setMovies(response.data.results)})
      .catch(err => `There was an error fetching the data. Details: ${err}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log(movies[0].original_language);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Movie List</h1>
      </header>
      <main>
        { movies.map( (movie) => {
          return <p>{movie.original_title}</p>;
        })}
      </main>
    </div>
  );
}

export default App;
