import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCountries: any = createAsyncThunk(
	"allCountries/getAllCountries",
	async () => {
		try {
			const res = await fetch("https://restcountries.eu/rest/v2/all");
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

const allCountriesSlice = createSlice({
	name: "allCountries",
	initialState: {
		loading: true,
		countriesData: [],
	},
	reducers: {},
	extraReducers: {
		[getAllCountries.pending]: (state) => {
			state.loading = true;
		},
		[getAllCountries.fulfilled]: (state, action) => {
			state.loading = false;
			state.countriesData = action.payload;
		},
	},
});

export default allCountriesSlice.reducer;
