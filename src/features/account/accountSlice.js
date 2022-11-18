import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
	name: "account",
	initialState: {
		value: {
			name: "",
			email: "",
			favourites: [],
			status: false,
		},
	},
	reducers: {
		logout: (state) => {
			state.value = {
				name: "",
				email: "",
				favourites: [],
				status: false,
			};
		},
		addFavourite: (state, action) => {
			if (
				action.payload !==
				state.value.favourites.find((fav) => fav === action.payload)
			) {
				state.value.favourites = [...state.value.favourites, action.payload];
			} else {
				state.value.favourites = state.value.favourites.filter(
					(fav) => fav !== action.payload
				);
			}
		},
		login: (state, action) => {
			state.value = {
				name: action.payload.name,
				favourites: action.payload.favourites,
				status: true,
			};
		},
	},
});

export const { login, logout, addFavourite } = accountSlice.actions;

export default accountSlice.reducer;
