import React from 'react';

export const Dropdown = ({onChange}) => {
  return (
    <label>
    Payment Period
     <select onChange ={onChange}>
       <option value=  "year" name="year"> Year</option>
       <option value = "month" name= "month" >Month </option>
       
     </select>
   </label>
  )
}
