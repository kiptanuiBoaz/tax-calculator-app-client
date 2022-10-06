import {  configureStore} from "@reduxjs/toolkit";
import taxResultSlice from "../components/features/resultSlice";



export const store = configureStore({
    reducer:{
        reducer: taxResultSlice,
       
    }
})


// A slice is a collection of reducer logic and actions for a single feature
// devTools: process.env.NODE_ENV !== "production",