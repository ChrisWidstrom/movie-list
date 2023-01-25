import React from "react";
import Movie from "../ts/types/types";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import MovieItem from "./MovieItem";

const MovieList = ({ movieList, setQuery, setMovieId } : { movieList: Movie[], setQuery: Function, setMovieId: Function }) => {
    return ( 
        <div className="searchPane">

            <div className="linkGroup">
                <NavLink to="/database" className={({ isActive }) => (isActive ? 'menu-item-active' : 'menu-item')}>Movie Database</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-item-active' : 'menu-item')}>My List</NavLink>
            </div>

            <SearchBar setQuery={setQuery}/>
            { movieList.map( (movie: Movie)=> {
                return <MovieItem title={movie.title} id={movie.id} setMovieId={setMovieId}/>
            })}

        </div>   
    )
}

export default MovieList;