import React from "react";
import Movie from "./Movie";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const MovieList = ({ movieList, setQuery, setMovieId } : { movieList:any, setQuery: any, setMovieId: any }) => {
    return ( 
        <div className="searchPane">

            <div className="linkGroup">
                <NavLink to="/" className={"menu-item"}>Movie Database</NavLink>
                <NavLink to="my-list" className={"menu-item"}>My List</NavLink>
            </div>

            <SearchBar setQuery={setQuery}/>
            { movieList.map( (movie:any)=> {
                return <Movie key={movie.id} title={movie.original_title} id={movie.id} setMovieId={setMovieId}/>
            })}
        </div>   
    )
}

export default MovieList;