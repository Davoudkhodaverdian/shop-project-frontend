import { combineReducers, configureStore } from '@reduxjs/toolkit'
import personsReducer from './personsSlice';
import shoppingBagReducer from './shoppingBagSlice';
import productsReducer from './productsSlice';
import postsReducer from './postsSlice';
import authReducer from './auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
  persons: personsReducer,
  auth: authReducer,
  shoppingBag: shoppingBagReducer,
  products: productsReducer,
  posts: postsReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth","currentPerson","shoppingBag"] // only this items will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    //non-serializable value
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, }),
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

//for persist
const persistor = persistStore(store)
export { store, persistor }