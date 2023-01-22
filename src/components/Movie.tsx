import React from 'react';

const Movie = ( {title} : { title: string }) => {
    return (
        <div className='movieName'>
            <p>{title}</p>
        </div>
    );
}

export default Movie;