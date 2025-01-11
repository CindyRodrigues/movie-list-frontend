import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from '../features/movies/moviesSlice'

export default configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})