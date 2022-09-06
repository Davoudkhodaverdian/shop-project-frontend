import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Person from '../components/models/person';

const initialState: Person[] = [
    { name: 'داوود خداوردیان', email: 'davoudkhodaverdian20@gmail.com', password: 'davoudkh2498' }
];

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