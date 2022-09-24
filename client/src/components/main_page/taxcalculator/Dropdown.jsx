import React from 'react'

export const Dropdown = () => {
  return (
    <label>
    Payment Period
     <select>
       <option value=  "year" name="year"> Year</option>
       <option value = "month" name= "month" >Month </option>
       
     </select>
   </label>
  )
}
