import {  configureStore} from "@reduxjs/toolkit";
import taxResultReducer from "../components/features/resultSlice";



export const store = configureStore({
    reducer:{
        resulting: taxResultReducer,
       
    }
});


// A slice is a collection of reducer logic and actions for a single feature
// devTools: process.env.NODE_ENV !== "production",