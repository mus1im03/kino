import { configureStore } from '@reduxjs/toolkit';
import application from '../features/applicationSlice';
import films from '../features/filmSlice';
import genres from '../features/genreSlice'
import comment from '../features/commentSlice'

export const store = configureStore({
    reducer: {
        application,
        films,
        genres,
        comment
    }
})