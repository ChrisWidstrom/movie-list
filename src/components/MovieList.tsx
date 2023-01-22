import React from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

const MovieList = (props:any) => {
    return ( 
        <div>
            <SearchBar setQuery={props.setQuery}/>
            { props.movieList.map( (movie:any)=> {
                return <Movie key={movie.id} title={movie.original_title} id={movie.id} setMovieId={props.setMovieId}/>
            })}
        </div>   
    )
}

export default MovieList;