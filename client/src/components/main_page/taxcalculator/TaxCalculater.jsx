import React from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculator.css";

export const TaxCalculater = () => {

  const data = {}

  const handleSavings = (event) => {
  
    data.savings = event.target.value;
  };

  const handleInsurance = () => {
  };

  const handleMortgage = () =>{

  };

  const handleDisability = () =>{

  };

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
      />

     <Dropdown/>
     

      <FieldInput
        text= "Gross Salary"
        type = "number"
        name ="grossSalary"
        
      />

      <FieldInput
        text="Contribution Benefit"
        type="number"
        name ="contributionBenefit"

      />

      <RadioInput
        text=" Do you have any disability exception certificate?"
        name="disability"
        onChange={handleDisability}
        option1 = "Yes"
        option2 = "No"
      /> 

      <RadioInput
        text=" Do you have a mortgage?"
        name="mortgage"
        onChange={handleMortgage}
        option1 = "Yes"
        option2 = "No"
      /> 


      <RadioInput
        text="Do you have a life insurance policy?"
        name="insurance"
        onChange={handleInsurance}
        option1 = "Yes"
        option2 = "No"
      /> 

     

      <RadioInput
        text="Do you have  a Home Ownership Savings Plan?"
        name="savings"
        onChange={handleSavings}
        option1 = "Yes"
        option2 = "No"
      />     

      <button onClick={formSubmit}>Calculate </button>

    </form>
  </>
  )
}
