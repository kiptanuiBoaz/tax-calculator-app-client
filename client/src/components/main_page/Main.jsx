import React, { useState } from 'react';
import { BillManager } from './billmanager/BillManager';
import { Footer } from "../footer/Footer"
import { TaxCalculator } from './taxcalculator/TaxCalculater';
import "./mainPageStyle/style.css";
import { NavBar } from '../navbar/NavBar';
import { TaxResult } from './taxResult/TaxResult';




export const Main = () => {
  return (
    <>
      <NavBar />
      <MainPage />
      <Footer />
    </>
  )
}


const MainPage = () => {
  // state to manage the to manage the task of the user
  const [task, setTask] = useState("tax");
  const [taxResult, setTaxResult] = useState();
  const setPage = (event,taxRequest1) => {
    setTaxResult(taxRequest1)
    setTask(event.target.name);
  }

  return (
    <section style={{ marginTop: "100px" }} className="mainSection">

      <div className="mainContent">
        <button className="selectBtn" style={{ backgroundColor: (task === "tax") && "#1CB484" }} onClick={setPage} name="tax" >Tax Calculater</button>
        <button className="selectBtn" style={{ backgroundColor: (task === "bill") && "#1CB484" }} onClick={setPage} name="bill" >Bill Manager</button>
      </div>

      <div className="main-div">
        {(task === "tax") && <TaxCalculator onClick={setPage} />}
        {(task === "bill") && <BillManager />}
        {(task === "result") && <TaxResult TaxResult={taxResult} />}

      </div>

    </section>
  )

}
