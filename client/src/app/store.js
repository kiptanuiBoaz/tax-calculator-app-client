import {configureStore} from "@reduxjs/toolkit";
import taxResultSlice from "../components/features/resultSlice";
import yearOfTaxationSlice from "../components/features/yearOfTaxation"

export const store = configureStore({
    reducer:{
        resulting:taxResultSlice,
    }
})


// A slice is a collection of reducer logic and actions for a single feature