import React from 'react';

const Movie = ( props: { title: string, synopsis: string, releaseDate: string } ) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.synopsis}</p>
            <p>Release date: {props.releaseDate}</p>
        </div>
    );
}

export default Movie;