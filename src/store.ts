import { configureStore } from "@reduxjs/toolkit";
import darkModeButtonReducer from "./features/darkModeButton/darkModeButtonSlice";
import allCountriesReducer from "./features/countryCard/countryCardSlice";
import countryDetailsReducer from "./features/countryCard/countryDetailsSlice";

const store = configureStore({
	reducer: {
		darkMode: darkModeButtonReducer,
		countriesData: allCountriesReducer,
		countryDetails: countryDetailsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
