import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Person from "../models/person";


const initialState: Person[] = [];

const personsSlice = createSlice({
    name: "person",
    initialState: initialState,
    reducers: {
        setPersons: (state, action: PayloadAction<Person[]>) => {
            state = action.payload;
            return state;
        },
        addPerson: (state, action: PayloadAction<Person>) => {
            state.push(action.payload);
            return state;
        },
    }
})

export const { setPersons, addPerson, } = personsSlice.actions;

export default personsSlice.reducer;