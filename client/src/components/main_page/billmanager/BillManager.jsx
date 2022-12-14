import React, { useState } from "react";
import "./billmabagerStyle/style.css";
import { useSelector } from "react-redux";

export const BillManager = () => {
  const [isShown, setIsShown] = useState();

  const [clicked, setClicked] = useState(false);
  

  const [billAlreadyExists, setBillAlreadyExists] = useState(null);

  const [newBill, setNewBill] = useState({
    billName: ""
  });

  //initialise the bills array
  const [bills, setBills] = useState([
    { billName: "Rent", billValue: Number },
    { billName: "Entertainment", billValue: Number },
    { billName: "Food", billValue: Number },
    { billName: "Shopping", billValue: Number }
  ]);

  const [balance, setBalance] = useState(0);

  //initialise array with values used in calculating the total bill
  const [computeValues, setComputeValues] = useState([]);

  //bill currently being added
  const [beingAdded, setBeingAdded] = useState("");

  const pushNewBill = event => {
    event.preventDefault();
  

      setBills(current => [...current, newBill]);  
      setClicked(false);
    
    setNewBill({ billName: "" });
    
  };

  //fetching the value of the netpay from redux store
  const netPay = useSelector(state => state.resulting.taxResult.netPay);

  const pushDefaultBill = event => {
    const { name, value } = event.target;

    setComputeValues(prev => {
      return { ...prev, [name]: parseInt(value) || 0 };
    });

    calculateBalance();
  };

  const calculateBalance = () => {
    //reduce function to accumulate the total value of bills for every array element
    setBalance(
      //generate an array of values and find  the sum of the array elements
      netPay - Object.values(computeValues).reduce((c, d) => c + d, 0)
    );
  };



  const handleClick = (event) => {
    //add new bill
    if (clicked) {
      pushNewBill(event);
      setClicked(false);
      //resetting bieng added
      setBeingAdded(null)
      //display the newbill input field
    } else {
      setClicked(true);
    }
  };

  const addNewBill = (event) => {

    //destructuring the event object
    const { name, value } = event.target;

    //checking if a bill with the same name already exists
    if(bills.some((obj) => obj.billName === value)){
      setBillAlreadyExists(value);
      console.log(billAlreadyExists)
    }else{
      setBillAlreadyExists(null);
      //set the name to be displayed in the remove button
      setBeingAdded(value);
      //update the bills array
      setNewBill((prevBill) => {
        return {
          ...prevBill,
          [name]: value
        }
      });
    }

  };

  const removeBill = (a, event) => {
    setClicked(false)
    //remove the bill whose remove button has been clicked from the display array

    setBills((prevBill) => {
      return prevBill.filter((bill, i) => {
        return i !== a
      });
    })

    //set the removed bill value to zero in the compute values
    setComputeValues(prev => (
      { ...prev, [event.target.name]: 0 }
    ));
  }

  return (
    <div className="label-bill">
      {bills.map(({billName}, a, bills) => {

        return (

          <div key={billName} onMouseEnter={() => (a > 3) && setIsShown(a)} onMouseLeave={() => setIsShown("")} className="label-bill" >

            <div className="bill" >

              <label>{`${billName.slice(0,12)}`} {billName.length > 13 && "..."}</label>
              <div className="remo">
                <input
                  autoComplete="off"
                  className="noscroll"
                  onChange={(event) => pushDefaultBill(event)}
                  type="number" name={billName}
                  onMouseLeave={(event) => pushDefaultBill(event)}
                />
                {isShown === a && <button name={billName} className="removeBill" onClick={(event) => removeBill(a, event)} >{`Remove ${billName.slice(0,4)} ${billName.length > 4 && "..."}`} </button>}
              </div>

            </div>

          </div>
        )
      })}

      {/* //adding a new bill(input field that apears after the add newBill is cliked) */}
      {clicked &&
        <div className="secodary-input" >
          <input onChange={addNewBill} type="text" name="billName" value={newBill.billName} />
          {billAlreadyExists && <p className="exist-error">{`'${billAlreadyExists}' already exists`}</p>}
          {/* <button onClick={pushNewBill}>+</button> */}
        </div>
      }

      <div className="billButtons">
        <button
          name="addBill"
          disabled={ clicked && !newBill.billName }
          onClick={
            (event) => {
              event.preventDefault();
              // if newbill is bieng added push new bill otherwise displayinput fields
              handleClick(event)
            }
          }
          // display bill in default and the billname bieng added conditionally
          >Add {clicked ? `${beingAdded.slice(0,12) +  beingAdded.length > 13 && "..."}` : "bill"} </button>
         
      </div>
      {/* display if balance is a negative value */}
      {(balance < 0) &&  <p className="error">Balace cannot be less than zero! </p>}

      <p className="balance">Net Pay: {` KES ${netPay} `}</p>

      <p className="balance">Balance:<span style={{ color: netPay * 0.2 > balance ? "red" : "#1CB484" }}>{` KES ${balance} `}</span> </p>
    </div>

  )
};
