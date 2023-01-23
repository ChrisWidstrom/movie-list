import React from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";

const MovieList = ({ movieList, setQuery, setMovieId } : { movieList:any, setQuery: any, setMovieId: any }) => {
    return ( 
        <div>
            <SearchBar setQuery={setQuery}/>
            { movieList.map( (movie:any)=> {
                return <Movie key={movie.id} title={movie.original_title} id={movie.id} setMovieId={setMovieId}/>
            })}
        </div>   
    )
}

export default MovieList;