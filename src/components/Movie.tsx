import React from 'react';

const Movie = ( {title, setMovieId, id} : { title: string, setMovieId: any, id:string }) => {

    const updateMovieId = () => {
        setMovieId(id);
    }
    return (
        <div className='movieName'>
            <p onClick={updateMovieId}>{title}</p>
        </div>
    );
}

export default Movie;