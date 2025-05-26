import { configureStore } from '@reduxjs/toolkit'
import personsReducer from './personsSlice';
import shoppingBagReducer from './shoppingBagSlice';
import productsReducer from './productsSlice';
import postsReducer from './postsSlice';
import authReducer from './auth';

export const store = configureStore({
  reducer: {
    persons: personsReducer,
    auth: authReducer,
    shoppingBag: shoppingBagReducer,
    products: productsReducer,
    posts: postsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
