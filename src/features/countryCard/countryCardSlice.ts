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

export const getCountriesByRegion: any = createAsyncThunk(
	"allCountries/getCountriesByRegion",
	async (region: string) => {
		try {
			const res = await fetch(
				`https://restcountries.eu/rest/v2/region/${region}`
			);
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const searchCountryByName: any = createAsyncThunk(
	"allCountries/getCountriesByRegion",
	async (name: string, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
			const data = await res.json();

			if (res.status === 404) {
				throw new Error();
			}

			return data;
		} catch (error) {
			return rejectWithValue("Error");
		}
	}
);

const allCountriesSlice = createSlice({
	name: "allCountries",
	initialState: {
		loading: true,
		countriesData: [],
		error: false,
	},
	reducers: {},
	extraReducers: {
		[getAllCountries.pending]: (state) => {
			state.loading = true;
		},
		[getAllCountries.fulfilled]: (state, action) => {
			state.loading = false;
			state.countriesData = action.payload;
			state.error = false;
		},

		[getCountriesByRegion.pending]: (state) => {
			state.loading = true;
		},
		[getCountriesByRegion.fulfilled]: (state, action) => {
			state.loading = false;
			state.countriesData = action.payload;
			state.error = false;
		},
		[searchCountryByName.pending]: (state) => {
			state.loading = true;
		},
		[searchCountryByName.fulfilled]: (state, action) => {
			state.loading = false;
			state.countriesData = action.payload;
			state.error = false;
		},
		[searchCountryByName.rejected]: (state, action) => {
			state.loading = false;
			state.error = true;
		},
	},
});

export default allCountriesSlice.reducer;
