import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

export const fetchFilms = createAsyncThunk(
  "fetch/films",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4050/film");

      const films = await res.json();

      if (films.error) {
        return thunkAPI.rejectWithValue(items.error);
      }

      return thunkAPI.fulfillWithValue(films);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export default filmsSlice.reducer;