import React from 'react';

export const Dropdown = ({onChange}) => {
  return (
    <label className="label">
    Payment Period
     <select className="select" onChange ={onChange}>
       <option value=  "Year" name="Year"> Year</option>
       <option value = "Month" name= "Month" >Month </option>
       
     </select>
   </label>
  )
}
