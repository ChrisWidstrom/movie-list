import React, { useState, useEffect } from 'react';
import Movie from './components/Movie'
import axios from 'axios';
import './App.css';

const App = () => {

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
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>
        { movies.map( (movie) => {
          return <Movie key={movie.id} title={movie.title} synopsis={movie.overview} releaseDate={movie.release_date}/>
        })}
        </div>

      </header>
      <main>
        
      </main>
    </div>
  );
}

export default App;
