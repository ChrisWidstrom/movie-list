import React from 'react';

const MovieItem = ( {title, setMovieId, id} : { title: String, setMovieId: Function, id: Number }) => {

    const updateMovieId = () => {
        setMovieId(id);
    }

    return (
        <div className='movieName'>
            <p onClick={updateMovieId}>{title}</p>
        </div>
    );
}

export default MovieItem;