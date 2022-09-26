const router=require('express').Router()

router.post('/payeCalculator',(req,res)=>{
        //   let contribution=
        let {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,homeOwnership,disability}=req.body;
        if(!grossSalary) return res.status(404).json("Please set your gross salary");
        contributionBenefit=contributionBenefit ? contributionBenefit : 1080;
        insuranceRelief=insuranceRelief ? insuranceRelief * 0.15 : 0;
        // Declaraing default values
        personalRelief=2400;
        PAYE=0;
        totalTax=0;
        totalReductions=disability ? grossSalary + contributionBenefit + mortageInterest : contributionBenefit + mortageInterest;
        taxableIncome=grossSalary - totalReductions;


        if(taxableIncome > 24000){
           remainingAmount=taxableIncome - 24000;
           taxDue1=24000 * 0.1;
           totalTax += taxDue1;

           if(remainingAmount >8333){
                remainingAmount-=8333;
                taxDue2=8333 * 0.25;
                totalTax += taxDue2;
           }
           else{
                taxDue2=remainingAmount * 0.25;
                totalTax += taxDue2;
                return res.status(200).json({finalTaxDue,remainingAmount,totalTax});
           }
           if(remainingAmount > 32332){
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