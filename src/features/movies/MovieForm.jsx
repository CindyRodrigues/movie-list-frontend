import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovieAsync } from "./moviesSlice"
import { useNavigate } from "react-router-dom"

const MovieForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        movieTitle: "",
        director: "",
        genre: ""
    })
    const [successMessage, setSuccessMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMovieAsync(formData))
        setFormData({
            movieTitle: "",
            director: "",
            genre: ""
        })
        setSuccessMessage("Movie added successfully!")
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }

    return (
        <div className="container py-5">
            <h1 className="mb-3">Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="movieTitle" className="form-label">Title:</label>
                    <input type="text" id="movieTitle" name="movieTitle" value={formData.movieTitle} className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="director" className="form-label">Director:</label>
                    <input type="text" id="director" name="director" value={formData.director} className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre:</label>
                    <input type="text" id="genre" name="genre" value={formData.genre} className="form-control" onChange={handleChange} required />
                </div>
                <button className="btn btn-primary mb-3" type="submit">Add</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    )
}

export default MovieForm