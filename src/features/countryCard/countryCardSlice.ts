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

export const searchCountryByName: any = createAsyncThunk(
	"allCountries/getCountriesByName",
	async (name: string, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
			const data = await res.json();

			if (res.status === 404) {
				throw new Error("Oops! That didn't work. Please try again.");
			}

			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const allCountriesSlice = createSlice({
	name: "allCountries",
	initialState: {
		loading: true,
		countriesData: [],
		error: "",
		countryRegion: "Filter By Region",
	},
	reducers: {
		// searchByName: (state, action) => {
		// 	const filteredCountries = state.countriesData.filter((country: any) =>
		// 		country.name.toLowerCase().includes(action.payload.toLowerCase())
		// 	);
		// 	state.countriesData = filteredCountries || [];
		// 	state.error = state.countriesData.length > 0 ? false : true;
		// },
	},
	extraReducers: {
		[getAllCountries.pending]: (state) => {
			state.loading = true;
		},
		[getAllCountries.fulfilled]: (state, action) => {
			state.loading = false;
			state.countriesData = action.payload;
			state.error = "";
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
			state.error = "";
			state.countryRegion = region;
		},

		[searchCountryByName.pending]: (state) => {
			state.loading = true;
		},
		[searchCountryByName.fulfilled]: (state, action) => {
			const filteredCountryList = action.payload.filter((country: any) =>
				country.region === state.countryRegion
					? country
					: state.countryRegion === "All" ||
					  state.countryRegion === "Filter By Region"
					? country
					: null
			);

			state.countriesData = filteredCountryList;
			state.loading = false;
			state.error =
				state.countriesData.length > 0
					? ""
					: "No data to show. Please Search again.";
		},
		[searchCountryByName.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export default allCountriesSlice.reducer;
