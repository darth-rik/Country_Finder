import { configureStore } from "@reduxjs/toolkit";
import darkModeButtonReducer from "./features/darkModeButton/darkModeButtonSlice";

export default configureStore({
	reducer: {
		darkMode: darkModeButtonReducer,
	},
});
