import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
    const response = await axios.get("https://movie-list-backend-ashen.vercel.app/movies")
    return response.data
})

export const deleteMovieAsync = createAsyncThunk("movies/deleteMovie", async (movieId) => {
    const response = await axios.delete(`https://movie-list-backend-ashen.vercel.app/movies/${movieId}`)
    return response.data
})

export const addMovieAsync = createAsyncThunk("movies/addMovie", async (newMovie) => {
    const response = await axios.post("https://movie-list-backend-ashen.vercel.app/movies", newMovie)
    return response.data
})

export const updateMovieAsync = createAsyncThunk("movies/updateMovie", async ({ movieId, updatedMovie }) => {
    const response = await axios.put(`https://movie-list-backend-ashen.vercel.app/movies/${movieId}`, updatedMovie)
    return response.data
})

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = "success"
            state.movies = action.payload
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(deleteMovieAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(deleteMovieAsync.fulfilled, (state, action) => {
            state.status = "success"
            state.movies = state.movies.filter((movie) => movie._id !== action.payload.movie._id)
        })
        builder.addCase(deleteMovieAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(addMovieAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(addMovieAsync.fulfilled, (state, action) => {
            state.status = "success"
            state.movies.push(action.payload)
        })
        builder.addCase(addMovieAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
        builder.addCase(updateMovieAsync.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(updateMovieAsync.fulfilled, (state, action) => {
            state.status = "success"
            const index = state.movies.findIndex((movie) => movie._id === action.payload._id)
            state.movies[index] = action.payload
        })
        builder.addCase(updateMovieAsync.rejected, (state, action) => {
            state.status = "error"
            state.error = action.error.message
        })
    }
})

export default moviesSlice.reducer