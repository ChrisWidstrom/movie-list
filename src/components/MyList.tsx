import React from 'react';
import Movie from '../ts/types/types';

const MyList = ( { myList } : { myList: Movie[] }) => {
    return (
        <div>
            <h1>My list of movies</h1>
            {
            myList.map( movie => {
                return <h1> { movie.title } </h1>;
            })
            }
        </div>
    )
}

export default MyList;