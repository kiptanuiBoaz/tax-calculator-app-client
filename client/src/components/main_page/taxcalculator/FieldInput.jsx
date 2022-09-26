import React from 'react'

export const FieldInput = ({text, type, name,onChange,value }) => {
  return (
    <label className="label">
       {text} <input onChange={onChange} type={type} value={value} name={name} />
      </label>
  )
}
