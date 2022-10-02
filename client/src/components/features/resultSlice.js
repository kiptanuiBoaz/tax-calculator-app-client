import {createSlice} from "@reduxjs/toolkit";


export const taxResultSlice = createSlice({
    name: "resulting",
    taxResult:{},

    reducers:{
        updateTaxResult:(state,action)=> { state.result= action.payload}
    },

})

export const {updateTaxResult} = taxResultSlice.actions;
export default taxResultSlice.reducer;