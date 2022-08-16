import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Person from '../components/models/person';

const initialState: Person = {
    name: 'داوود خداوردیان', email: 'davoudkhodaverdian20@gmail.com', password: 'davoudkh2498'
}
    
const currentPersonSlice = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        setCurrentPersonSlice: (state, action: PayloadAction<Person>) => {
            state = action.payload;
            return state;
        },

    }
})

export const { setCurrentPersonSlice } = currentPersonSlice.actions;

export default currentPersonSlice.reducer;