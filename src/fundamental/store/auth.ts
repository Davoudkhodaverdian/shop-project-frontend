import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Auth from "../models/auth";

const initialState: Auth = {
    verifyToken: '',
    user: null,
    newLogin: false
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<Auth>) => {
            state = action.payload;
            return state;
        },
        clearNewLogin: (state)=>{
            state.newLogin = false
        }
    }
})

export const { setAuth,clearNewLogin } = authSlice.actions;

export default authSlice.reducer;