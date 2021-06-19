import { createSlice } from "@reduxjs/toolkit";

export const darkModeButtonSlice = createSlice({
	name: "darkModeButton",
	initialState: {
		isDarkModeOn: false,
	},
	reducers: {
		toggleMode: (state, action) => {
			state.isDarkModeOn = action.payload;
		},
	},
});

export const { toggleMode } = darkModeButtonSlice.actions;

export default darkModeButtonSlice.reducer;
