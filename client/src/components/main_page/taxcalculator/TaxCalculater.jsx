import React, { useState} from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";




export const TaxCalculator = ({onClick}) => {

  const [taxResult, setTaxResult] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const [taxError, setTaxError] = useState("");
  const [grossSalary,setGrossSalary]=useState(0)
  // const [yearOfTaxation,setyearOfTaxation]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState(false)
  
      
    const postTax = async () => {
      
      try {
        
        const response = await axios.post('http://localhost:8080/api/payeCalculator', 
          {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,disability}, 
          //  ,
          {
            headers: {
              'Content-Type': "application/json",
              'Accept': "application/json",
            }  
          } 
        )
        const result = response.data
        setTaxResult(result)
        
        console.log(taxResult)
      } 

      catch (error) {
        
        setTaxError(error.response.data.message);
        console.log(error.response.data.message)

      }

      finally{
        setIsLoading(false);
      }

    };


  const formSubmit = (event) =>{
    onClick(event,taxResult)
    event.preventDefault();
    grossSalary && postTax();
    
  };

  
  return (
    <>
      <p className={{color:'red'}}>{taxError}</p>

      <form className="tax-form">
        <FieldInput
          className="yearofTaxation"
          text="Year of Taxation"
          type="year"
          name="yearOfTaxation"
          // onChange={ event=> setyearOfTaxation (parseInt(event.target.value))}
        />

        <Dropdown  onChange = { event =>  setpaymentPeriod(event.target.value)} />

        <FieldInput
          text= "Gross Salary"
          name ="grossSalary"
          onChange={ event =>  setGrossSalary(parseInt(event.target.value))}
        />

        <FieldInput
          text="Contribution Benefit"
          name ="contributionBenefit"
          onChange={event=> setcontributionBenefit( parseInt(event.target.value))}
         

        />

        <RadioInput
          text=" Do you have any disability exception certificate?"
          name="disability"
          onChange={event => (event.target.value === "true") && setDisability(true)}
          option1 = "Yes"
          option2 = "No"
          disability
        /> 
 
        <RadioInput
          text=" Do you have a mortgage?"
          name="mortageInterest"
          onChange={event => setmortageInterest( parseInt(event.target.value))}
          option1 = "Yes"
          option2 = "No"
        /> 


        <RadioInput
          text="Do you have a life insurance policy?"
          name="insuranceRelief"
          onChange={event=> setinsuranceRelief (parseInt(event.target.value))}
          option1 = "Yes"
          option2 = "No"
        /> 
  
        <button name="result"  className ="selectBtn" onClick={(event)=>formSubmit(event)}>{ isLoading ? "Calculating..." : "Calculate"} </button>
      </form>

      
    </>
  )
};