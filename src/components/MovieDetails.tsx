import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ( { movieId } : { movieId:string} ) => {

    const [movie, setMovie] = useState<any>();

    useEffect( () => {
        console.log('UseEffect runs')
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=2b8c078972f734dba09ea9a3fcdfdf58&language=en-US`)
            .then( response => {
                console.log(response.data)
                setMovie(response.data)})
            .catch( err => `Error description: ${err}`)
    }, [movieId])

    return (
        <div>
            <p>{movie.original_title}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie poster"/>
        </div>
    )
}

export default MovieDetails;