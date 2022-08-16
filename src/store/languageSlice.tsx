import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: 'fa',
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state = action.payload;
            return state;
        },

    }
})

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;