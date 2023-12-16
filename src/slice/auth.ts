import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
	isLoading: boolean;
	loggedIn: boolean;
	user: User | null;
	error: string | null;
}

interface User {
	name: string;
	email: string;
	password: string;
	access_token: string;
	refresh_token: string;
	error: string | null;
}

const initialState: IAuthState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		authUserStart: (state) => {
			state.isLoading = true;
		},
		authUserSuccess: (state, action: PayloadAction<User>) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = action.payload;
		},
		authUserFailure: (state, action: PayloadAction<User>) => {
			state.isLoading = false;
			state.error = action.payload.error;
		}
	}
})

export const {authUserStart, authUserSuccess, authUserFailure} = authSlice.actions;
export default authSlice.reducer;