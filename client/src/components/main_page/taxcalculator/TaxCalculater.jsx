import React from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculator.css";

export const TaxCalculater = () => {

  const data = {yearOfTaxation: '2000'}

  

  const formSubmit = (event) =>{
    event.preventDefault();
    console.log(data)
  }

  return (
  <>
    <form className="tax-form">
      
      <FieldInput
        text="Year of Taxation"
        type="year"
        name="yearOfTaxation"
        onChange={(event)=>{data.yearOfTaxation = event.target.value}}
      />

     <Dropdown 
     onChange = {(event) => {data.paymentPeriond = event.target.value}}

     />
     

      <FieldInput
        text= "Gross Salary"
        type = "number"
        name ="grossSalary"
        onChange={(event) =>{data.grosSalary = event.target.value}}
        
        
      />

      <FieldInput
        text="Contribution Benefit"
        type="number"
        name ="contributionBenefit"
        onChange={(event)=>{data.contribution = event.target.value}}

      />

      <RadioInput
        text=" Do you have any disability exception certificate?"
        name="disability"
        onChange={(event) => {data.disability = event.target.value}}
        option1 = "Yes"
        option2 = "No"
        disability
      /> 

      <RadioInput
        text=" Do you have a mortgage?"
        name="mortgage"
        onChange={(event) => data.mortgage = event.target.value}
        option1 = "Yes"
        option2 = "No"
      /> 


      <RadioInput
        text="Do you have a life insurance policy?"
        name="insurance"
        onChange={(event)=>{data.insurance = event.target.value}}
        option1 = "Yes"
        option2 = "No"
      /> 

  
      <button onClick={formSubmit}>Calculate </button>

    </form>
  </>
  )
}
