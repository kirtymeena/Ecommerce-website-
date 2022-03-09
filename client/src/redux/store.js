import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from "./cartSlice";
import userReducer from './userSlice'
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

  const persistConfig = {
      key:'root',
      version:1,
      storage
  }

  const rootReducer = combineReducers({
      products:productReducer,
      users:userReducer,
      cart:cartReducer
  })

  const persistedReducer = persistReducer(persistConfig,rootReducer)

  export const store = configureStore({
      reducer:persistedReducer,
      middleware:(getDefaultMiddleware)=>
      getDefaultMiddleware({
          serializableCheck:{
              ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
          }
      })
  })
  export let persistor = persistStore(store)