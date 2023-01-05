import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    yearOfTaxation: 2000
}

export const yearOfTaxationSlice = createSlice({
    name: "taxYear",
    initialState,
    reducers:{
        updatePaymentPeriod:(state,action)=>{ state.yearOfTaxation = action.payload}

    }
})

export const {updatePaymentPeriod} = yearOfTaxationSlice.actions;
export default yearOfTaxationSlice.reducer;
