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
		let res;
		try {
			if (region === "All" || region === "Filter By Region") {
				res = await fetch(`https://restcountries.eu/rest/v2/all`);
			} else {
				res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
			}
			const data = await res.json();
			return {
				data,
				region,
			};
		} catch (error) {
			console.log(error);
		}
	}
);

// export const searchCountryByName: any = createAsyncThunk(
// 	"allCountries/getCountriesByRegion",
// 	async (name: string, { rejectWithValue }) => {
// 		try {
// 			const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
// 			const data = await res.json();

// 			if (res.status === 404) {
// 				throw new Error();
// 			}

// 			return data;
// 		} catch (error) {
// 			return rejectWithValue("Error");
// 		}
// 	}
// );

const allCountriesSlice = createSlice({
	name: "allCountries",
	initialState: {
		loading: true,
		countriesData: [],
		error: false,
		countryRegion: "Filter By Region",
	},
	reducers: {
		searchByName: (state, action) => {
			const filteredCountries = state.countriesData.filter((country: any) =>
				country.name.toLowerCase().includes(action.payload.toLowerCase())
			);

			state.countriesData = filteredCountries || [];
			state.error = state.countriesData.length > 0 ? false : true;
		},
	},
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
		[getCountriesByRegion.fulfilled]: (
			state,
			{ payload: { data, region } }
		) => {
			state.loading = false;
			state.countriesData = data;
			state.error = false;
			state.countryRegion = region;
		},

		// [searchCountryByName.pending]: (state) => {
		// 	state.loading = true;
		// },
		// [searchCountryByName.fulfilled]: (state, action) => {
		// 	state.loading = false;
		// 	state.countriesData = action.payload;
		// 	state.error = false;
		// },
		// [searchCountryByName.rejected]: (state, action) => {
		// 	state.loading = false;
		// 	state.error = true;
		// },
	},
});
export const { searchByName } = allCountriesSlice.actions;

export default allCountriesSlice.reducer;
