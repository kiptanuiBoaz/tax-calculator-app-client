import React from 'react'

export const FieldInput = ({text, type, name,onChange }) => {
  return (
    <label className="label">
       {text} <input onChange={onChange} type={type}  name={name} />
    </label>
  )
}
