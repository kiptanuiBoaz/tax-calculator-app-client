import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    taxResult: null
}
const taxResultSlice = createSlice({
    name: "resulting",
    initialState,
    reducers:{
        updateTaxResult:(state,action)=> { state.taxResult= action.payload}
    },

})

export const {updateTaxResult} = taxResultSlice.actions;
export default taxResultSlice.reducer;

// Natujenge2022#OYF