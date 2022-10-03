import React from 'react'

export const FieldInput = ({text, type, name, onChange }) => {
  return (
    <label className="label">
       {text} <input onChange={(event)=>onChange(event)} type={type}  name={name} />
    </label>
  )
}
