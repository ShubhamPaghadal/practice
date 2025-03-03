import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    editData: (state, action) => {
      state.todos = action.payload;
    },

    deletData: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { editData, deletData } = todoslice.actions;
export default todoslice.reducer;
