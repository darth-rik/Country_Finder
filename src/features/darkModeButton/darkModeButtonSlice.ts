import { createSlice } from "@reduxjs/toolkit";

const theme =
	localStorage.darkMode && JSON.parse(localStorage.getItem("darkMode") || "");

export const darkModeButtonSlice = createSlice({
	name: "darkModeButton",
	initialState: {
		isDarkModeOn: theme ? theme : false,
	},
	reducers: {
		toggleMode: (state, action) => {
			state.isDarkModeOn = action.payload;
			localStorage.setItem("darkMode", action.payload);
		},
	},
});

export const { toggleMode } = darkModeButtonSlice.actions;

export default darkModeButtonSlice.reducer;
