import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import storage from "redux-persist/lib/storage/index.js";
import persistReducer from "redux-persist/es/persistReducer.js";

const persistConfig = {
    key: "persist",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export default configureStore({
    reducer: {
        user: persistedReducer
    }
})