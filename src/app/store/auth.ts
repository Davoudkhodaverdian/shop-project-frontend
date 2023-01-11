import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Auth from "../../components/models/auth";

const initialState: Auth = {
    verifyToken: '',
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<Auth>) => {
            state = action.payload;
            return state;
        },
    }
})

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;