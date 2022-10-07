import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";
import {updateTaxResult,updateTaxYear} from "../../features/resultSlice";
import { current } from '@reduxjs/toolkit';


export const TaxCalculator = ({onClick}) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [taxError, setTaxError] = useState("");
  const [grossSalary,setGrossSalary]=useState(0)
  const [taxYear,setTaxYear]=useState();
  const [taxResult,setTaxResult]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState(false);
  

  
      
  const postTax = async() => {

    setIsLoading(true);
        // const url = "http://localhost:5000/api/payeCalculator";

    try {

      const payLoad = {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,disability};

      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/payeCalculator",
        data: payLoad,
      })
      setIsLoading(false);
      dispatch(updateTaxResult(res.data));
      console.log(res.data)
      
    } 
    catch (error) {
     
      setTaxError(error)
      console.log(taxError)
    }

    
  };


  const formSubmit = (e) =>{
    grossSalary && onClick(e)
    e.preventDefault();
    grossSalary && postTax() ;

  };

  
  return (
    <>
      {/* <p className={{color:'red'}}>{taxError}{ yearOfTaxation}</p> */}

      <form className="tax-form">
        <FieldInput
          className="yearofTaxation"
          text="Year of Taxation"
          type="year"
          name="year"
          onChange={ (e) => {
            const {value,name} = e.target;

            setTaxYear( (current) =>{ 
              return{ 
                ...current,
                [name]: parseInt(value) || 2000
              }}
            )

            dispatch(updateTaxYear(taxYear));

          }}
        />

        <Dropdown  onChange = { e =>  setpaymentPeriod(e.target.value)} />

        <FieldInput
          text= "Gross Salary"
          name ="grossSalary"
          onChange= { e =>  setGrossSalary(parseInt(e.target.value))}
        />

        <FieldInput
          text="Contribution Benefit"
          name ="contributionBenefit"
          onChange={e=> setcontributionBenefit( parseInt(e.target.value))}

        />

        <RadioInput
          text=" Do you have any disability exception certificate?"
          name="disability"
          onChange={e =>{ (e.target.value === "true") && setDisability(true)}}
          option1 = "Yes"
          option2 = "No"
          disability
        /> 
 
        <RadioInput
          text=" Do you have a mortgage?"
          name="mortageInterest"
          onChange={e => setmortageInterest( parseInt(e.target.value))}
          option1 = "Yes"
          option2 = "No"
        /> 


        <RadioInput
          text="Do you have a life insurance policy?"
          name="insuranceRelief"
          onChange={e => setinsuranceRelief (parseInt(e.target.value))}
          option1 = "Yes"
          option2 = "No"
        /> 
  
        <button name="result"  className ="selectBtn" onClick={(e)=>formSubmit(e)}>{ isLoading ? "Calculating..." : "Calculate"} </button>
      </form>

      
    </>
  )
};