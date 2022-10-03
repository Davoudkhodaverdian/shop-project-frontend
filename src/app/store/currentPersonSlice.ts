import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Person from '../../components/models/person';

const initialState: Person = {
    name: '', email: ''
}
    
const currentPersonSlice = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        setCurrentPerson: (state, action: PayloadAction<Person>) => {
            state = action.payload;
            return state;
        },

    }
})

export const { setCurrentPerson } = currentPersonSlice.actions;

export default currentPersonSlice.reducer;