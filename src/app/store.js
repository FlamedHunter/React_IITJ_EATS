import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../components/home/categoriesSlice'

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
    }
})