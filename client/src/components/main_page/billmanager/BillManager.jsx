import React, {useState} from "react";
import "./billmabagerStyle/style.css";


export const BillManager = () => {
  const [isShown, setIsShown] = useState()

  const [clicked,setClicked] = useState(false);

  const [newBill, setNewBill] = useState({
    billName:""
    
  });

  const [bills, setBills] = useState([{billName:"Rent",billValue:Number,},{billName:"Entertainment",billValue:Number,},{billName:"Food",billValue:Number,} ,{billName:"Shopping",billValue:Number,}]);
  const [balance, setBalance] = useState(0);
  const [computeValues, setComputeValues]= useState([]);
  
  const pushNewBill = (event) =>{
    event.preventDefault();
    (newBill.billName ) && setBills(current => [...current, newBill])
    setNewBill({billName:""});
    setClicked(false);
  }

  

  const pushDefaultBill = (event)=>{
    const {name, value}= event.target;
    
    setComputeValues(prev => {
        return  {...prev, [name]: parseInt(value)  || 0}
      }
    );
      
    
      
  };
  console.log(computeValues)
  
  const calculateBalance = ()=>{
    setBalance((Object.values(computeValues).reduce((c,d)=>c+d)))
  };

  Object.values(computeValues) >0 && calculateBalance();

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

  const removeBill = (a,event) => {
    setClicked(false)

    setBills((prevBill) =>{
      return prevBill.filter((bill, i)=>{
        return i !== a
      });
    })

    setComputeValues(prev =>( 
      {...prev, [event.target.name]: 0}
    ))
  };

    

  return (
    <div className="label-bill">
        {bills.map((bill,a,bills)=>{
          
          return(

            <div key={a} onMouseEnter={() => (a > 3) && setIsShown(a)} onMouseLeave={() => setIsShown("")} className="label-bill" >

              <div className="bill" >

                <label>{bill.billName}</label> 
                <div className="remo">
                  <input 
                      autoComplete="off"
                      className="noscroll"
                      onChange={(event)=>  pushDefaultBill(event)}
                    type="number" name={bill.billName}
                  />
                  { isShown === a && <button name={bill.billName} className="removeBill" onClick={(event)=>removeBill(a,event)} >{`Remove ${bill.billName}`.toLocaleLowerCase()} </button> }
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
         
      
      <p className="balance">Balance: {` KES ${ balance } `}</p> 
    </div>
    
  )
}
