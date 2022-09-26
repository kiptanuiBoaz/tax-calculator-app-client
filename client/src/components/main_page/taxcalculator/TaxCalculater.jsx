import React, {useState} from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";

export const TaxCalculator = () => {

  const [taxResult, setTaxResult] = useState();
  const [taxError, setTaxError] = useState("no error");

  const data = {};

  const postTax = async () => {
    axios.post('http://localhost:8080/paye', data)
    
    .then(response => setTaxResult({response}))
    .catch(error => {
      setTaxError(error);
      console.error(taxError);
    })

    console.log(taxResult);
  }

  const formSubmit = (event) =>{
    event.preventDefault();
    postTax();
  }

  return (
  <>
    <form className="tax-form">
      
      <FieldInput
      className="yearofTaxation"
        text="Year of Taxation"
        type="year"
        name="yearOfTaxation"
        onChange={ event=> data.yearOfTaxation = parseInt(event.target.value || "2000")}
      />

     <Dropdown 
     onChange = { event => data.paymentPeriond = event.target.value || "year"}

     />
     

      <FieldInput
        text= "Gross Salary"
        type = "number"
        name ="grossSalary"
        onChange={ event => data.grosSalary = parseInt(event.target.value || "0000")}
        
        
      />

      <FieldInput
        text="Contribution Benefit"
        type="number"
        name ="contributionBenefit"
        onChange={event=>data.contribution = parseInt( event.target.value || "0000" )}

      />

      <RadioInput
        text=" Do you have any disability exception certificate?"
        name="disability"
        onChange={event => {data.disability = event.target.value==="true"}}
        option1 = "Yes"
        option2 = "No"
        disability
      /> 

      <RadioInput
        text=" Do you have a mortgage?"
        name="mortgage"
        onChange={event => data.mortgage = parseInt(event.target.value ||"0000")}
        option1 = "Yes"
        option2 = "No"
      /> 


      <RadioInput
        text="Do you have a life insurance policy?"
        name="insurance"
        onChange={event=>data.insurance = parseInt(event.target.value ||"0000")}
        option1 = "Yes"
        option2 = "No"
      /> 

  
    <div className="calculateBtn">
        <button style={{backgroundColor: data.yearOfTaxation && data.insurance && data.mortgage && data.disability && data.contribution && data.grosSalary && data.paymentPeriond && "red"}} className = "selectBtn" onClick={formSubmit}>Calculate </button>
    </div>

    </form>
  </>
  )
}
