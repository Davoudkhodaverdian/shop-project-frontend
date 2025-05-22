import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number,
    name: string
    slug: string
    description: string
    price: number,
    image: string[]
}
const initialState: Product[] = [];
const productsSlice = createSlice({

    name: "products",
    initialState: initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state = action.payload;
            return state;
        },

    }

})

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;