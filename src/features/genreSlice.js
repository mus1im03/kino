import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};


export const fetchGenres = createAsyncThunk(
  "fetch/genres",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4050/genre");

      const genre = await res.json();

    //   if (genres.error) {
    //     return thunkAPI.rejectWithValue(genres.error);
    //   }

      return thunkAPI.fulfillWithValue(genre);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
    })
  },
});

export default genresSlice.reducer;