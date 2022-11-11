import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    initialState: initialState,
    reducers: {
        addShoppingBag: (state, action: PayloadAction<any>) => {
            state.push(action.payload);
            return state;
        },
        removeShoppingBag: (state, action: PayloadAction<any>) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },
        setCurrentProducthoppingBag: (state, action: PayloadAction<any>) => {
            state = state.map(item => item.id === action.payload.id ? { ...item, number: action.payload.number } : item);
            return state;
        }
    }
})

export const { addShoppingBag, removeShoppingBag, setCurrentProducthoppingBag } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;