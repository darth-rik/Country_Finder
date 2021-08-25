import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCountryDetails: any = createAsyncThunk(
	"countryDetails/getCountryDetails",
	async (code: string, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);

			if (res.status === 404) {
				throw new Error("Failed to fetch Data");
			}
			const data = await res.json();

			return data;
		} catch (error: any) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const getBorderCountries: any = createAsyncThunk(
	"countryDetails/getBorderCountries",
	async (code: string, { rejectWithValue }) => {
		try {
			const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
			const data = await res.json();
			const countryInfo = {
				name: data.name,
				code: data.alpha3Code,
			};
			if (res.status === 404) {
				throw new Error("Oops! That didn't work. Please try again.");
			}
			return countryInfo;
		} catch (error: any) {
			console.log(error);
			return rejectWithValue(error.message);
		}
	}
);

export const countryDetailsSlice = createSlice({
	name: "countryDetails",
	initialState: {
		country: {},
		loading: true,
		error: "",
		borderCountries: [],
	},
	reducers: {},
	extraReducers: {
		[getCountryDetails.pending]: (state) => {
			state.loading = true;
		},
		[getCountryDetails.fulfilled]: (state, action) => {
			state.loading = false;
			state.country = action.payload;
			state.borderCountries = [];
		},
		[getCountryDetails.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.country = {};
		},

		[getBorderCountries.fulfilled]: (
			state: { borderCountries: { name: string; code: string }[] },
			action
		) => {
			state.borderCountries.push(action.payload);
		},
		[getBorderCountries.rejected]: (state, action) => {
			state.error = action.payload;
			state.country = {};
		},
	},
});

export default countryDetailsSlice.reducer;
