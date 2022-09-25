const router=require('express').Router()

router.post('/payeCalculator',(req,res)=>{
        //   let contribution=
        let {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,disability}=req.body;
        if(!grossSalary) return res.status(404).json("Please set your gross salary");
        if(!paymentPeriod) return res.status(404).json("Is it a monthly payment");
        contributionBenefit=contributionBenefit ? contributionBenefit : 1080;
        contributionBenefit=paymentPeriod==="Year" ? contributionBenefit * 12 : contributionBenefit;
        insuranceRelief=paymentPeriod==="Year" ? insuranceRelief * 0.15 * 12 :insuranceRelief * 0.15;
        grossSalary=paymentPeriod ==="Year" ? grossSalary * 12 : grossSalary;
        personalRelief=paymentPeriod ==="Year" ? 2400 * 12 : 2400;
        firstLevel=paymentPeriod==="Year" ? 24000 * 12 : 24000;
        secondLevel=paymentPeriod==="Year" ? 8333 * 12 :  8333;
        finalLevel=paymentPeriod==="Year" ? 32332 * 12 :  32332;
        mortageInterest=paymentPeriod ==="Year" ? mortageInterest * 12 : mortageInterest;
        PAYE=0;
        totalTax=0;
        totalReductions=disability ? grossSalary + contributionBenefit + mortageInterest : contributionBenefit + mortageInterest;
        taxableIncome= grossSalary - totalReductions;


        if(taxableIncome > firstLevel){
           remainingAmount=taxableIncome - firstLevel;
           taxDue1=firstLevel * 0.1;
           totalTax += taxDue1;

           if(remainingAmount >secondLevel){
                remainingAmount-=secondLevel;
                taxDue2=secondLevel * 0.25;
                totalTax += taxDue2;
           }
           else{
                taxDue2=remainingAmount * 0.25;
                totalTax += taxDue2;
                return res.status(200).json({grossSalary,netPay,contributionBenefit,taxableIncome,totalTax,personalRelief,insuranceRelief,PAYE});
           }
           if(remainingAmount > finalLevel){
                finalTaxDue=remainingAmount * 0.3;
                totalTax +=finalTaxDue;
            }
           PAYE=totalTax - personalRelief - insuranceRelief;
           netPay=taxableIncome - PAYE;
           return res.status(200).json({grossSalary,netPay,contributionBenefit,taxableIncome,totalTax,personalRelief,insuranceRelief,PAYE});

        }
        else  {
              netPay = disability ? totalReductions : taxableIncome;  
        return res.status(200).json({grossSalary,netPay,contributionBenefit,taxableIncome,totalTax,personalRelief,insuranceRelief,PAYE});
        }




})



module.exports=router
// if(remainingAmount > 8333){
        //                     remainingAmount -=8333;
        //                     taxDue2=8333 * 0.25
        //                     taxPayable +=taxDue2
                           
                                   
        
        //                     if(remainingAmount > 32332){
        //                         finalTaxDue=remainingAmount * 0.3
        //                         taxPayable += finalTaxDue
                               
        //                     }
        //                     }
                       
        //                        else{
        //                          PAYE=taxPayable - 2400;
        //                         return res.status(200).json({taxPayable,PAYE})
        //                        }
        //         }else {
        //             return PAYE=0