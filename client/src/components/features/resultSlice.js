import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    taxResult: {
        grossSalary:0,
        PAYE:0,
        netPay:0,
        taxableIncome:0,
        contributionBenefit:0,
        insuranceRelief:0,
        personalRelief:0,
        totalTax:0,
        taxYear:2000,
    }
}
export const taxResultSlice = createSlice({
    name: "resulting",
    initialState,
    reducers:{
        updateTaxResult:(state,action)=> { state.taxResult = action.payload}
    },

})

export const {updateTaxResult} = taxResultSlice.actions;
export default taxResultSlice.reducer;

// Natujenge2022#OYF
// 157.230.13.246
// ssh @root