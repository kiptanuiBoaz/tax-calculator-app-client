const router=require('express').Router()

router.post('/payeCalculator',(req,res)=>{
        //   let contribution=
        let {grossSalary,paymentPeriod,contributionBenefit,mortageInterest,insuranceRelief,homeOwnership}=req.body;
        if(!grossSalary) return res.status(404).json("Please set your gross salary")
        contributionBenefit=contributionBenefit ? contributionBenefit : 1080;
        personalRelief=2400
        totalReductions=contributionBenefit + mortageInterest;
        taxableAmount=grossSalary - totalReductions
        taxPayable=0
        return res.status(200).json({taxableAmount})
//         if(taxableAmount > 24000){
//            remainingAmount=taxableAmount - 24000
//            taxDue1=24000 * 0.1;
//            taxPayable += taxDue1
          

//                 if(remainingAmount > 8333){
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
//         }
        
// // const taxRates=[
// //     {level:"first",amount:24000,applicableRates:0.1},
// //     {level:"second",amount:8333,applicableRates:0.25},
// //     {level:"final",amount:32332,applicableRates:0.3},
// // ]
// // const taxPayable=taxRates.reduce((currentTotal,item)=>{
// //  return item.amount
// // },0)
})



module.exports=router
