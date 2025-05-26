import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../models/product";

const initialState: ProductShopping[] = [];
export type ProductShopping = Product & { number: number };
const shoppingBagSlice = createSlice({
    name: "shoppingBag",
    initialState: initialState,
    reducers: {
        addShoppingBag: (state, action: PayloadAction<ProductShopping>) => {
            state.push(action.payload);
            return state;
        },
        removeShoppingBag: (state, action: PayloadAction<number>) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },
        setCurrentProducthoppingBag: (state, action: PayloadAction<ProductShopping>) => {
            state = state.map(item => item.id === action.payload.id ? { ...item, number: action.payload.number } : item);
            return state;
        }
    }
})

export const { addShoppingBag, removeShoppingBag, setCurrentProducthoppingBag } = shoppingBagSlice.actions;

export default shoppingBagSlice.reducer;