import React, {useState} from 'react';
import { BillManager } from './billmanager/BillManager';
import {Footer } from "../footer/Footer"
import { TaxCalculator } from './taxcalculator/TaxCalculater';
import "./mainPageStyle/style.css";
import { navBar as NavBar } from '../navBar/navBar';


export const Main = ()=>{
  return(
    <>
      <NavBar/>
      <MainPage/>
      <Footer/>
    </>
  )
}


const MainPage = () => {
  // state to manage the to manage the task of the user
  const [ task, setTask] = useState("bill");

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
