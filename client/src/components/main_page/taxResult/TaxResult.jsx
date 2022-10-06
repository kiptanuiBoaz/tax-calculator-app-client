import  "./taxResultStyle/style.css";
import {useSelector} from "react-redux";
import React from 'react';


export const TaxResult = () => {
    const taxResult = useSelector((state)=>state.resulting.taxResult);
    const taxYear = useSelector((state)=>state.taxYear.yearOfTaxation);
   
    
    const {grossSalary,PAYE,netPay,taxableIncome,contributionBenefit,insuranceRelief,personalRelief,totalTax} =  taxResult;
    console.log(taxYear);
  return (
    
    <div className="taxResult">
        <p>This is the tax breakdown for the year {taxYear}</p>
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
            <div className="deduction">
                <div className="deductionLeft">
                    <p>Net Pay</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{netPay}</p>
                    </div>
                </div>
            </div>
            <div className="deduction">
                <div className="deductionLeft">
                    <p>Taxable Income</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{`${taxableIncome}`}</p>
                    </div>
                </div>
            </div>
            <div className="deduction">
                <div className="deductionLeft">
                    <p> Contribution Benefit</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{contributionBenefit}</p>
                    </div>
                </div>
            </div>
            <div className="deduction">
                <div className="deductionLeft">
                    <p>Insurance Relief</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{insuranceRelief}</p>
                    </div>
                </div>
            </div>
            <div className="deduction">
                <div className="deductionLeft">
                    <p>Personal Relief</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{personalRelief}</p>
                    </div>
                </div>
            </div>
            <div className="deduction">
                <div className="deductionLeft">
                    <p>Total Tax</p>
                </div>
                <div className="deductionRight">
                    <div className="kes">
                        <p className="kes">KES</p>
                    </div>
                    <div className="amount">
                        <p>{totalTax}</p>
                    </div>
                </div>
            </div>

        </div>


        <div className="paye tab">
            <div className="payeLeft">
                <p>PAYE</p>
            </div>
            <div className="payeRight">
                <div className="kes">
                    <p>KES</p>
                </div>
                <div className="amount">
                    <p>{PAYE}</p>
                </div>
            </div>
        </div>
    </div>
  )}