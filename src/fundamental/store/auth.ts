import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Auth from "../models/auth";
import Person from "../models/person";

const initialState: Auth = {
    user: null,
    loading: true
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<Auth>) => {
            state = action.payload;
            return state;
        },
        setUser: (state, action: PayloadAction<Person>) => {
            state.user = action.payload;
            return state;
        },
    }
})

export const { setAuth, setUser } = authSlice.actions;

export default authSlice.reducer;