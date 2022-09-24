import React, {useState} from 'react';
import { BillManager } from './BillManager';
import { TaxCalculater } from './taxcalculator/TaxCalculater';

export const Main = () => {
  // state to manage the to manage the task of the user
  const [ task, setTask] = useState("");

  const setPage = (event)=>{
   
    setTask(event.target.name);
  }

  return (
    <>
    
      <div>
        <button onClick={setPage} name="tax" >Tax Calculater</button>
        <button onClick={setPage} name="bill" >Bill Manager</button>
      </div>
      
      <div>
        {(task === "tax") && <TaxCalculater/> }
        {(task === "bill") && <BillManager/> }

      </div>
      
    </>
  )
  
}
