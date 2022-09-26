import React, {useState} from "react";
import "./billmabagerStyle/style.css";


export const BillManager = () => {
  

  const [clicked,setClicked] = useState(false);

  const [newBill, setNewBill] = useState({
    billName:"",
    billValue:Number
  });

  const [defaultBill, setDefaultBill] = useState({  
    billName:"",
   billValue:Number
  });

  const [bills, setBills] = useState([{billName:"Rent",billValue:Number,},{billName:"Entertainment",billValue:Number,},{billName:"Food",billValue:Number,} ,{billName:"Shopping",billValue:Number,}]);
  const [computeArray, setComputeArray] = useState([]);
  
  const pushNewBill = () =>{
    // let billValue = newBill.billValue 
    // let billName = newBill.billName


    if(newBill.billName && newBill.billValue ){
      setBills(current => [...current, newBill])
    }

    console.log(bills)
  }

  const pushDefaultBill = ()=>{

    if(defaultBill.billName && defaultBill.billValue){
      // console.log("defaultBill full")
    }
  }
  

 

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
    pushNewBill()
   
  };

   

  return (
    <div className="label-bill">
          {bills.map((bill,i,bills)=>{
            return(
              <div className="bill" >

                <label>{bill.billName}</label> 
                <input className="noscroll" onChange={ (event)=>{ setDefaultBill({                   
                      "billName":bill.billName,
                      "billValue":parseInt(event.target.value),})
                      pushDefaultBill()
                    }
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
