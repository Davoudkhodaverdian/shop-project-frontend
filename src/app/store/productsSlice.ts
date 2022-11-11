import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const productsSlice = createSlice({

    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<any[]>) => {
            state = action.payload;
            return state;
        },

    }

})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;