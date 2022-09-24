import React, {useState} from "react";
import { Bill } from "./Bill";
import "./billManager.css";


export const BillManager = () => {
  const bills = [{billName:"Rent"},{billName:"Entertainment"},{billName:"Food"} ,{billName:"Shopping"}];
  // const startBill = 0;
  const balance= 0;

  const [billSum, setBillSum] = useState(0)

  const handleBillSumming = (startBill) => {
    console.log(startBill)
    // setBillSum(bills.reduce( (prevValue , bills.value) => previousValue + currentValue )
  };
  // const finalBill = bills.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue,
  //   initialValue
  // );


  return (
    <div>

      {bills.map((bill)=>{
        return(
          <Bill 
            bill= {bill}
            onChange={(event)=>{
              bill.billValue = event.target.value;
              handleBillSumming( bill.billValue)
              
              }}
          />
        )
      })}

      <p>{`Balance:  KES ${balance} `}</p>
    </div>

  )
}
