import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";
import {updateTaxResult} from "../../features/resultSlice"



export const TaxCalculator = ({onClick}) => {

  const dispatch = useDispatch();
  const {taxResult,setTaxResult}=useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [taxError, setTaxError] = useState("");
  const [grossSalary,setGrossSalary]=useState(0)
  // const [yearOfTaxation,setyearOfTaxation]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState(false)
  
      
  const postTax = () => {
    setIsLoading(true);
    const payLoad = {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,disability};
    const url = "http://localhost:8080/api/payeCalculator";
    
      
    axios 
      .post(url, payLoad, 
        {
          headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
          }  
        })

        .then((response) => {
          setTaxResult(response.data)
          console.log(response.data)

          dispatch(updateTaxResult(taxResult || 0))
        
        })
    

        .catch ((error)=> {
          setTaxError(error.response.data.message);
          console.log(taxError)

        })

        .finally(()=>setIsLoading(false));

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
          onChange= { event =>  setGrossSalary(parseInt(event.target.value))}
        />

        <FieldInput
          text="Contribution Benefit"
          name ="contributionBenefit"
          onChange={event=> setcontributionBenefit( parseInt(event.target.value))}
         

        />

        <RadioInput
          text=" Do you have any disability exception certificate?"
          name="disability"
          onChange={event =>{ (event.target.value === "true") && setDisability(true)}}
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