import React from 'react'

export const Bill = ({bill, onChange}) => {
  return (
    <div className="bill">
        <p>{bill.billName}</p>
        <input onChange={onChange} type="number"/>
    </div>
    
  )
}
