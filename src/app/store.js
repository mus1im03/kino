import { configureStore } from '@reduxjs/toolkit';
import application from '../features/applicationSlice';
import films from '../features/filmSlice';

export const store = configureStore({
    reducer: {
        application,
        films
    }
})