import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCountries = createAsyncThunk(
	"allCountries/getAllCountries",
	async () => {
		try {
			const res = await fetch("https://restcountries.com/rest/v2/all");
			const data = await res.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const getCountriesByRegion = createAsyncThunk(
	"allCountries/getCountriesByRegion",
	async (region: string) => {
		let res;
		try {
			if (region === "All" || region === "Filter By Region") {
				res = await fetch(`https://restcountries.com/rest/v2/all`);
			} else {
				res = await fetch(`https://restcountries.com/rest/v2/region/${region}`);
			}
			const data: {}[] = await res.json();
			return {
				data,
				region,
			};
		} catch (error) {
			console.log(error);
		}
	}
);

export const searchCountryByName = createAsyncThunk(
	"allCountries/getCountriesByName",
	async (name: string, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://restcountries.com/rest/v2/name/${name}`);
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

type IState = {
	loading: boolean;
	countriesData: {}[];
	error: string | any;
	countryRegion: string;
};

type Payload = {
	data: {}[];
	region: string;
};

const allCountriesSlice = createSlice({
	name: "allCountries",
	initialState: {
		loading: true,
		countriesData: [],
		error: "",
		countryRegion: "Filter By Region",
	} as IState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getAllCountries.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			getAllCountries.fulfilled,
			(state, action: { payload: [] }) => {
				state.loading = false;
				state.countriesData = action.payload;
				state.error = "";
			}
		);
		builder.addCase(getCountriesByRegion.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(
			getCountriesByRegion.fulfilled,
			(state, { payload }: Payload | any) => {
				state.loading = false;
				state.countriesData = payload.data;
				state.error = "";
				state.countryRegion = payload.region;
			}
		);
		builder.addCase(searchCountryByName.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(searchCountryByName.fulfilled, (state, action) => {
			const filteredCountryList = action.payload.filter(
				(country: { region: string }) =>
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
		});
		builder.addCase(searchCountryByName.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export default allCountriesSlice.reducer;
