import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const ThemeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    setDark: (state, action) => {
      state.theme = "dark";
    },
    setLight: (state, action) => {
      state.theme = "light";
    },
  },
  devTools: import.meta.env.MODE !== "production",
});

export const { setDark, setLight } = ThemeSlice.actions;
export default ThemeSlice.reducer;
