import React from 'react'

export const FieldInput = ({text, type, name }) => {
  return (
    <label>
       {text} <input type={type} name={name} />
      </label>
  )
}
