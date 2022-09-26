import React, {useState} from 'react';
import { BillManager } from './billmanager/BillManager';
<<<<<<< HEAD
import { TaxCalculator } from './taxcalculator/TaxCalculater';
import "./mainPage.css"
=======
import { TaxCalculater } from './taxcalculator/TaxCalculater';
import "./mainPageStyle/style.css"
>>>>>>> e01b0491866ce1d290d01e4e65f3029f0fed97ef

export const Main = () => {
  // state to manage the to manage the task of the user
  const [ task, setTask] = useState("tax");

  const setPage = (event)=>{
   
    setTask(event.target.name);
  }

  return (
    <section className="mainSection">
    
      <div  className="mainContent">
        <button className="selectBtn" style= {{backgroundColor:(task === "tax") &&  "#1CB484"}} onClick={setPage} name="tax" >Tax Calculater</button>
        <button  className="selectBtn" style= {{backgroundColor:(task === "bill") &&  "#1CB484"}} onClick={setPage} name="bill" >Bill Manager</button>
      </div>
      
      <div className="main-div">
        {(task === "tax") && <TaxCalculator/> }
        {(task === "bill") && <BillManager/> }

      </div>
      
    </section>
  )
  
}
