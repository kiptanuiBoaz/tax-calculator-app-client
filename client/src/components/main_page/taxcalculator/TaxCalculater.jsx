import React, { useState} from 'react';
import { useDispatch} from 'react-redux';
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";
import {updateTaxResult} from "../../features/resultSlice";
import { useSelector } from 'react-redux';



export const TaxCalculator = ({onClick}) => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [taxError, setTaxError] = useState("");
  const [grossSalary,setGrossSalary]=useState(0)
  const [yearOfTaxation,setyearOfTaxation]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState(false);
  
  const taxResult = useSelector((state)=>state.resulting.taxResult);

  console.log(taxResult)
      
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
      
    } catch (error) {
      console.log(error)
    }

    
      
    // axios 
    //   .post(url, payLoad, 
    //     {
    //       headers: {
    //         'Content-Type': "application/json",
    //         'Accept': "application/json",
    //       }  
    //     })
    //     .then((response) => {
    //       setTaxResult(response.data)
    //       console.log(response.data)
    //     })
    //     .catch ((error)=> {
    //       setTaxError(error.response.data);
    //       console.log(error.response.data.message)
    //     })
    //     .finally(()=>{
    //       setIsLoading(false);
    //       dispatch(updateTaxResult(taxResult || 0));
    //     });


  };


  const formSubmit = (e) =>{
    onClick(e,taxResult)
    e.preventDefault();
    grossSalary && postTax();
    
  };

  
  return (
    <>
      <p className={{color:'red'}}>{taxError}{ yearOfTaxation}</p>

      <form className="tax-form">
        <FieldInput
          className="yearofTaxation"
          text="Year of Taxation"
          type="year"
          name="yearOfTaxation"
          onChange={ e=> setyearOfTaxation (parseInt(e.target.value))}
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