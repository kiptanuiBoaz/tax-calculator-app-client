import {  configureStore} from "@reduxjs/toolkit";
import taxResultSlice from "../components/features/resultSlice";
import yearOfTaxationSlice from "../components/features/yearOfTaxation";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer  =  combineReducers({
    taxYear: yearOfTaxationSlice,
    resulting: taxResultSlice,
})

export const store = configureStore({
    reducer:{
        reducer: rootReducer ,
       
    }
})


// A slice is a collection of reducer logic and actions for a single feature
// devTools: process.env.NODE_ENV !== "production",