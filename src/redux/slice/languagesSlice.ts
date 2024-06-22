import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languages: [],
  selectedLanguage: "en",
};
export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});
export default languagesSlice.reducer;
export const { setLanguages, setSelectedLanguage } = languagesSlice.actions;
