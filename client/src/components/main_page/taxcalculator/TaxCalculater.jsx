import React, {useState,useContext} from 'react'
import { Dropdown } from "./Dropdown";
import { FieldInput } from "./FieldInput";
import { RadioInput } from "./RadioInput"
import "./taxCalculatorStyle/style.css";
import axios from "axios";
import { TaxContext } from '../../../context/Taxcontext';
import { TaxResult } from '../taxResult/TaxResult';

export const TaxCalculator = () => {
  const {taxResult,setTaxResult}=useContext(TaxContext)
  
  const [taxError, setTaxError] = useState("");
  const [grossSalary,setGrossSalary]=useState(0)
  const [yearOfTaxation,setyearOfTaxation]=useState(0)
  const [paymentPeriod,setpaymentPeriod]=useState("")
  const [contributionBenefit,setcontributionBenefit]=useState(0)
  const [mortageInterest,setmortageInterest]=useState(0)
  const [insuranceRelief,setinsuranceRelief]=useState(0)
  const [disability,setDisability]=useState(false)
  const [loading,setLoading]=useState(false)
  
  const postTax = async () => {
     
    try {
      setLoading(true)
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
      setLoading(false)
      console.log(taxResult)
    } catch (error) {
      setLoading(false)
      setTaxError(error.response.data.message);
      console.log(error.response.data.message)
    }
  }

  const formSubmit = (event) =>{
    event.preventDefault();
    postTax();
  }


  return (
   
  <>
   {Object.keys(taxResult).length > 0 && <TaxResult /> }
  <p className={{color:'red'}}>{taxError}</p>
    <form className="tax-form">
      <FieldInput
      className="yearofTaxation"
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
        onChange={event=>setcontributionBenefit(parseInt( event.target.value))}

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

        onChange={event =>setmortageInterest(parseInt( event.target.value))}

        option1 = "Yes"
        option2 = "No"
      /> 


      <RadioInput
        text="Do you have a life insurance policy?"
        name={insuranceRelief}
        onChange={event=>setinsuranceRelief(parseInt( event.target.value))}
        option1 = "Yes"
        option2 = "No"
      /> 

  

      <button style={{backgroundColor: yearOfTaxation && insuranceRelief && mortageInterest && disability && contributionBenefit && grossSalary && paymentPeriod && "red"}} className = "selectBtn" onClick={formSubmit}>{loading ? "calculating": "Calculate"}</button>


    </form>

  </>
  )
}
