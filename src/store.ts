import { configureStore } from "@reduxjs/toolkit";
import darkModeButtonReducer from "./features/darkModeButton/darkModeButtonSlice";
import allCountriesReducer from "./features/countryCard/countryCardSlice";

const store = configureStore({
	reducer: {
		darkMode: darkModeButtonReducer,
		countriesData: allCountriesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
