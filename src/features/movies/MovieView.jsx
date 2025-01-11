import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "./moviesSlice"
import MovieList from "./MovieList"
import { Link } from "react-router-dom"

const MovieView = () => {
    const dispatch = useDispatch()
    const { movies, status, error } = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return (
        <div className="container py-5">
            <h1 className="mb-3">Movie Management System</h1>
            <button className="btn btn-warning mb-3">
                <Link to="/addMovie">Add Movie</Link>
            </button>
            <h2 className="mb-3">Movie List</h2>
            {status === "loading" && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {status === "success" && <MovieList movies={movies} />}
        </div>
    )
}

export default MovieView