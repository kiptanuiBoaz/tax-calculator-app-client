import React, {useState} from "react";
import "./billManager.css";


export const BillManager = () => {
  const bills = [{billName:"Rent",billValue:Number,},{billName:"Entertainment",billValue:Number,},{billName:"Food",billValue:Number,} ,{billName:"Shopping",billValue:Number,}];
  let temp = [];
  let final = [];

  const [clicked,setClicked] = useState(false);

  const [newBill, setNewBill] = useState({
    billName:"",
    billValue:Number
  });

  const [defaultBill, setDefaultBill] = useState({  
    // billName:"",
   billValue:Number
  });
  
  
  // final = temp.push(newBill);
  console.log(defaultBill);

 

  const handleClick= () =>{
    setClicked(true);
  
  };

  const addNewBill = (event)=> {
    const {name, value} = event.target;

    setNewBill((prevBill) =>{
      return{
        ...prevBill,
        [name]: value
      }
      
    });

  };

   

  return (
    <div className="label-bill">
          {bills.map((bill,i,bills)=>{
            return(
              <div className="label-bill" >

                <label>{bill.billName}</label> 
                <input onChange={ (event)=>{ setDefaultBill({                   
                        "billName":bill.billName,
                        "billValue":parseInt(event.target.value),})}
                      }
                  
                  type="number" name="billValue"
                />
               
              </div>
            )
          })}

          {clicked &&
            <div className="secodary-input" >
              <input onChange={addNewBill} type="text" name="billName" value={newBill.billName} />
              <input onChange={addNewBill} type="number" name="billValue"  value={parseInt(newBill.billValue)}/>
            </div> 
          }
          <div className="billButtons">
            <button onClick={ (event)=>{event.preventDefault(); handleClick()}}>Add bill</button>
            {clicked && <button onClick={()=>!setClicked(false)}>Remove bill</button> }
          </div>
         
          
{/*         
      <p>{`Balance:  KES ${balance} `}</p>  */}
    </div>

  )
}
