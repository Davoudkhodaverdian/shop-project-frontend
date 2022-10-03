import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    initialState: initialState,
    reducers: {
        addShoppingBag: (state, action: PayloadAction) => {
            state.push(action.payload);
            return state;
        },
        removeShoppingBag: (state, action: PayloadAction) => {
            state = state.filter(item=> item.ProductID !== action.payload);
            return state;
        },
    }
})

export const {  addShoppingBag,removeShoppingBag } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;