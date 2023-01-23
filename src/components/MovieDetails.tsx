import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const MovieDetails = ( { movieId } : { movieId:string} ) => {

    const movie = useRef<any>();
    const [imgURL, setImgUrl] = useState('');
    const title = useRef('');
    const overview = useRef('');
    const releaseDate = useRef('');
    const genres = useRef<any>([]);
    const runtime = useRef(0);

    useEffect( () => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2b8c078972f734dba09ea9a3fcdfdf58&language=en-US`)
            .then( response => {
                movie.current = response.data;
                setImgUrl(response.data.poster_path);
                title.current = response.data.title;
                overview.current = response.data.overview;
                releaseDate.current = response.data.release_date;
                genres.current = response.data.genres;
                runtime.current = response.data.runtime;
            })
            .catch( err => `Error description: ${err}`)
    })

    return (
        <div className="movieDetails">
            <div className="movieDetailsColumn1">
                <img src={`https://image.tmdb.org/t/p/w500/${imgURL}`} alt="movie poster" className="poster"/>
            </div>

            <div className="movieDetailsColumn2">

                <h1 className="movieHeading">{title.current}</h1>
                <div className="movieInfo">
                    <span>{releaseDate.current.slice(0, 4)} {" • "} {runtime.current} min</span>
                </div>

                <div className="genres"> 
                { genres.current.map( (genre:any) => {
                    return <span className="genre">{genre.name}</span>
                })}
                </div>

                <p>{overview.current}</p>


                <button type="button" className="addButton">Add to list</button>

            </div>
        </div>
    )
}

export default MovieDetails;