import React, {useState} from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculator.css";
import axios from "axios";

export const TaxCalculater = () => {

  const [taxResult, setTaxResult] = useState({});
  const [taxError, setTaxError] = useState("no error");
  const [grossSalary,setGrossSalary]=useState(0)
  const [yearOfTaxation,setyearOfTaxation]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("Month")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState("false")


  const postTax = async () => {
  
    try {
       const response=await axios.post('http://localhost:8080/api/payeCalculator', 
       { grossSalary, paymentPeriod,disability,contributionBenefit,mortageInterest,insuranceRelief },
      {
        headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        }  
    } )
      let result=response.data
      setTaxResult(result)
      console.log(taxResult)
    } catch (error) {
      setTaxError(error);
      console.error(taxError);
    }
  }

  const formSubmit = (event) =>{
    event.preventDefault();
    postTax();
    console.log(paymentPeriod)
  }

  return (
  <>
    <form className="tax-form">
      
      <FieldInput
        text="Year of Taxation"
        type="year"
        name={yearOfTaxation}
        onChange={ event=> setyearOfTaxation(event.target.value)}
      />

     <Dropdown 

     onChange = { event => setpaymentPeriod(event.target.value)}


     />
     

      <FieldInput
        text= "Gross Salary"
        
        name ={grossSalary}
        onChange={ event => setGrossSalary(parseInt( event.target.value))}
        
        
      />

      <FieldInput
        text="Contribution Benefit"
        
        name ={contributionBenefit}
        onChange={event=>setcontributionBenefit( event.target.value)}

      />

      <RadioInput
        text=" Do you have any disability exception certificate?"
        name={disability}
        onChange={event => setDisability(event.target.value)}
        option1 = "Yes"
        option2 = "No"
        disability
      /> 

      <RadioInput
        text=" Do you have a mortgage?"
        name={mortageInterest}

        onChange={event =>setmortageInterest(event.target.value)}

        option1 = "Yes"
        option2 = "No"
      /> 


      <RadioInput
        text="Do you have a life insurance policy?"
        name={insuranceRelief}
        onChange={event=>setinsuranceRelief(event.target.value)}
        option1 = "Yes"
        option2 = "No"
      /> 

  
      <button style={{backgroundColor: yearOfTaxation && insuranceRelief && mortageInterest && disability && contributionBenefit && grossSalary && paymentPeriod && "red"}} className = "selectBtn" onClick={formSubmit}>Calculate </button>

    </form>
  </>
  )
}
