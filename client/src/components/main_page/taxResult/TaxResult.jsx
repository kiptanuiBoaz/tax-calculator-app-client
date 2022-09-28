import  "./taxResultStyle/style.css";
import { TaxContext } from "../../../context/Taxcontext";
import React,{useContext} from 'react'
import { numberWithCommas } from "../../../utils/format";

export const TaxResult = () => {
    const {taxResult}=useContext(TaxContext)
    const {grossSalary,PAYE,netPay,taxableIncome,contributionBenefit,insuranceRelief,personalRelief,totalTax}=taxResult
  return (
    
    <div className="taxResult">
        <div className="grossSalary tab">
            <div className="grossLeft">
                <p className="grossTitle">Gross Salary</p>
            </div>
            <div className="grossRight">
                <p className="kes">KES</p>
                <p className="amount">{numberWithCommas( grossSalary)}</p>
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
                        <p>{numberWithCommas(netPay)}</p>
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
                        <p>{numberWithCommas(taxableIncome)}</p>
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
                        <p>{numberWithCommas(contributionBenefit)}</p>
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
                        <p>{numberWithCommas(insuranceRelief)}</p>
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
                        <p>{numberWithCommas(personalRelief)}</p>
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
                        <p>{numberWithCommas(totalTax)}</p>
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
                    <p>{numberWithCommas(PAYE)}</p>
                </div>
            </div>
        </div>
    </div>
  )}