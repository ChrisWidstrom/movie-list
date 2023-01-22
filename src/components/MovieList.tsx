import React from "react";
import Movie from "./Movie";

const MovieList = (props:any) => {
    return ( 
        <div>
            { props.movieList.map( (movie:any)=> {
                return <Movie key={movie.id} title={movie.original_title}/>
            })}
        </div>   
    )
}

export default MovieList;