import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Post {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string
}
const initialState: Post[] = [];

const postsSlice = createSlice({

    name: "posts",
    initialState: initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state = action.payload;
            return state;
        },

    }

})

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;