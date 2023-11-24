import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
};

export const fetchComment = createAsyncThunk(
  "fetch/comment",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4050/comments/${id}`, {
        method: "GET",
      });
      const comment = await res.json();
      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  "addComment/comment",
  async ({id, text}, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4050/comments/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        return thunkAPI.rejectWithValue("error");
      }

      const addComments = await res.json();
      return addComments;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: (builder) => {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.comment = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comment.push(action.payload);
      });
  },
});

export default commentSlice.reducer;