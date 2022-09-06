import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import AuthState from "../../components/models/authState";

const initialState: AuthState = {
    verifyToken: undefined
}


 
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuthSlice: (state, action: PayloadAction<AuthState>) => {
            state = action.payload;
            return state;
        },

    }
})

export const { setAuthSlice } = authSlice.actions;

export default authSlice.reducer;