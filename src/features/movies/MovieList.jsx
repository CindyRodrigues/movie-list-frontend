import { useDispatch } from "react-redux"
import { deleteMovieAsync } from "./moviesSlice"
import { Link } from "react-router-dom"

const MovieList = ({ movies }) => {
    const dispatch = useDispatch()

    const handleDelete = (movieId) => {
        dispatch(deleteMovieAsync(movieId))
    }

    return (
        <ul className="list-group">
            {movies.map((movie) => (
                <li key={movie._id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <strong>{movie.movieTitle}</strong> directed by {movie.director} (Genre: {movie.genre})
                    </div>
                    <div>
                        <button className="btn btn-warning btn-sm me-3">
                            <Link to="/addMovie" state={movie}>Edit</Link>
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default MovieList