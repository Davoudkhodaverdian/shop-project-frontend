import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './personsSlice';
import languageReducer from './languageSlice';
import currentPersonReducer from './currentPersonSlice';

export const store = configureStore({
  reducer: {
    persons: personsReducer,
    language: languageReducer,
    currentPerson: currentPersonReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch