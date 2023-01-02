const router=require('express').Router()

router.post('/payeCalculator',async(req,res)=>{
        //   let contribution=
     try {
          let {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,disability}=req.body;
          const {log} = console;
          if(!grossSalary) return res.status(404).json({message:"Please set your gross salary"});
          if(!paymentPeriod) return res.status(404).json({message:"Is it a monthly payment"});
        
          contributionBenefit=contributionBenefit ? contributionBenefit : 1080;
          contributionBenefit=paymentPeriod==="Year" ? contributionBenefit * 12 : contributionBenefit ;
          insuranceRelief=paymentPeriod==="Year" ? insuranceRelief * 0.15 * 12 :insuranceRelief * 0.15;
          grossSalary=paymentPeriod ==="Year" ? grossSalary * 12 : grossSalary;
          personalRelief=paymentPeriod ==="Year" ? 2400 * 12 : 2400;
          firstLevel=paymentPeriod==="Year" ? 24000 * 12 : 24000;
          secondLevel=paymentPeriod==="Year" ? 8333 * 12 :  8333;
          finalLevel=paymentPeriod==="Year" ? 32332 * 12 :  32332;
          mortageInterest=paymentPeriod ==="Year" ? mortageInterest * 12 : mortageInterest;
          let totalTax=0;
          totalReductions=disability ? grossSalary + contributionBenefit + mortageInterest : contributionBenefit + mortageInterest;
          taxableIncome=  grossSalary - totalReductions;
  
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
                  PAYE=totalTax - personalRelief - insuranceRelief;
                  netPay=taxableIncome - PAYE;
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
                 PAYE=0
                netPay = disability ? totalReductions : taxableIncome;  
          return res.status(200).json({grossSalary,netPay,contributionBenefit,taxableIncome,totalTax,personalRelief,insuranceRelief,PAYE});
          }
     
     } catch (error) {
          console.log(error.message)
          return res.status(200).json({message:`${error.message}`}); 
     }
         
     
   
})



module.exports=router
