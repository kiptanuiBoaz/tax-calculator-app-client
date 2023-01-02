import "./taxResultStyle/style.css";
import {useSelector} from "react-redux";
import React from 'react';

const Result = ({label, amount}) => (

  <div className="deduction">
    <div className="deductionLeft">
      <p>{label}</p>
    </div>
    <div className="deductionRight">
      <div className="kes">
        <p className="kes">KES</p>
      </div>
      <div className="amount">
        <p>{amount}</p>
      </div>
    </div>
  </div>
);
export const TaxResult = () => {
const taxResult = useSelector(state => state.resulting.taxResult);

const { grossSalary, year, PAYE, netPay, taxableIncome, contributionBenefit, insuranceRelief, personalRelief, totalTax } = taxResult;

return (
<div className="taxResult">
<p>{`This is the tax breakdown for the year ${year}`}</p>

 
  <div className="grossSalary tab">
    <div className="grossLeft">
      <p className="grossTitle">Gross Salary</p>
    </div>
    <div className="grossRight">
      <p className="kes">KES</p>
      <p className="amount"> {grossSalary}</p>
    </div>
  </div>
  <div className="deductions tab">
    {[
      { label: "Net Pay", amount: netPay },
      { label: "Taxable Income", amount: taxableIncome },
      { label: "Contribution Benefit", amount: contributionBenefit },
      { label: "Insurance Relief", amount: insuranceRelief },
      { label: "Personal Relief", amount: personalRelief },
      { label: "Total Tax", amount: totalTax },
    ].map(result => (
      <Result label={result.label} amount={result.amount} />
    ))}
  </div>
  <div className="paye tab">
    <div className="payeLeft">
      <p>PAYE</p>
    </div>
    <div className="payeRight">
      <p className="kes">KES</p>
      <p className="amount">{PAYE}</p>
    </div>
  </div>
</div>
);
};