import React from 'react';

export const Dropdown = ({onChange}) => {
  return (
    <label className="label">
    Payment Period
     <select className="select" onChange ={onChange}>
       <option value=  "year" name="year"> Year</option>
       <option value = "month" name= "month" >Month </option>
       
     </select>
   </label>
  )
}
