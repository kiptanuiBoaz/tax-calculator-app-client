import React from 'react'

export const RadioInput = ({text,name,onChange,option1, option2}) => {
  return (
    <label >
        {text}
        <div onChange ={onChange}>
            <input type="radio" value={true} name={name} /> {option1}
            <input type="radio" value={ false} name={name} /> {option2}
        </div>

   </label>
  )
};
