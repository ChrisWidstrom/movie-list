export type Movie = {
    id: Number,
    title: String,
    genres: Genre[],
    runtime: Number,
    release_date: String,
    poster_path: String,
    overview: String
}

export type Genre = {
    id: Number,
    name: String
}

export default Movie;