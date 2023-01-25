import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const MovieDetails = ( { movieId, addToList } : { movieId: Number, addToList: Function} ) => {

    const button = useRef<HTMLButtonElement>(null);

    const [movie, setMovie] = useState(
        { title: '', 
        poster_path: '', 
        release_date: '', 
        runtime: 0, 
        genres: [], 
        overview: ''
    });

    const updateButtonText = (text: String) => {
        if ( button.current !== null) {
            button.current.innerText = `${text}`;
        }
    }

    const addToMyList = () => {
        addToList(movie);

        updateButtonText("Added to list")
    }

    useEffect( () => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2b8c078972f734dba09ea9a3fcdfdf58&language=en-US`)
            .then( response => {
                setMovie(response.data);
            })
            .catch( err => `Error description: ${err}`)
        
        updateButtonText("Add to list");

    }, [setMovie, movieId])

    return (
        <div className="movieDetails">
            <div className="movieDetailsColumn1">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" className="poster"/>
            </div>

            <div className="movieDetailsColumn2">

                <h1 className="movieHeading">{movie.title}</h1>
                <div className="movieInfo">
                    <span>{movie.release_date.slice(0, 4)} {" • "} {movie.runtime} min</span>
                </div>

                <div className="genres"> 
                { movie.genres.map( (genre:any) => {
                    return <span className="genre" key={ Math.random() * 1000}>{genre.name}</span>
                })}
                </div>

                <p>{movie.overview}</p>

                <button type="button" ref={button} className="addButton" onClick={addToMyList}></button>

            </div>
        </div>
    )
}

export default MovieDetails;