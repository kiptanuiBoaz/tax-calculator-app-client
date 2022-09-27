import React, {useState} from "react";
import "./billmabagerStyle/style.css";


export const BillManager = () => {
  const [isShown, setIsShown] = useState()

  const [clicked,setClicked] = useState(false);

  const [newBill, setNewBill] = useState({
    billName:""
    
  });

  const [defaultBill, setDefaultBill] = useState({  
    billName:"",
   billValue:Number
  });

  const [bills, setBills] = useState([{billName:"Rent",billValue:Number,},{billName:"Entertainment",billValue:Number,},{billName:"Food",billValue:Number,} ,{billName:"Shopping",billValue:Number,}]);
  const [balance, setBalance] = useState(0);
  const [computeArray, setComputeArray]= useState([]);
  
  const pushNewBill = (event) =>{
    event.preventDefault();

    if(newBill.billName ){
      setBills(current => [...current, newBill])
    }

    setNewBill({billName:""});
    setClicked(false);

    
  }

  

  const pushDefaultBill = (defaultBill)=>{

    if(defaultBill.billName && defaultBill.billValue){

      (computeArray.includes(defaultBill) === false) && setComputeArray(current => [...current, defaultBill])
    }
  }

  console.log({computeArray});
  

 

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

  const removeBill = (a) => {
    setClicked(false)

    setBills((prevBill) =>{
      return prevBill.filter((bill, i)=>{
        return i !== a
      });
  })};
    

  return (
    <div className="label-bill">
        {bills.map((bill,a,bills)=>{
          
          return(

            <div  onMouseEnter={() => setIsShown(a)} onMouseLeave={() => setIsShown("")} className="label-bill" >

              <div className="bill" >

                <label>{bill.billName}</label> 
                <div className="remo">
                  <input className="noscroll" onChange={ (event)=>{ setDefaultBill({                   
                        "billName":bill.billName,
                        "billValue":parseInt(event.target.value),})
                        pushDefaultBill(defaultBill);
                        
                      }
                    }
                    
                    type="number" name="billValue"
                  />
                  { isShown === a && <button className="removeBill" onClick={()=>removeBill(a)} >{`Remove ${bill.billName}`.toLocaleLowerCase()} </button> }
                </div>

              </div>
            
            </div>
          )
        })}

        {clicked &&
          <div className="secodary-input" >
            <input onChange={addNewBill} type="text" name="billName" value={newBill.billName} />
            <button onClick={pushNewBill}>+</button>
          </div> 
        }
        
        <div className="billButtons">
          <button onClick={ (event)=>{event.preventDefault(); handleClick()}}>Add bill</button>
        </div>
         
      
      <p className="balance">{`Balance:  KES ${balance} `}</p> 
    </div>
    
  )
}
