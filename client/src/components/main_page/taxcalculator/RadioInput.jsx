import React ,{useState} from 'react'

export const RadioInput = ({text,name,onChange,option1, option2, disability}) => {
  const [available, setAvailable] = useState("false");

  const handleAvailability = (event)=>{

    setAvailable(event.target.value);
  
  }

 
  return (

    <label className="label-radio">
        {text}
        
          <div onChange= {disability ? onChange : handleAvailability}>
            <input type="radio" value={true} name={name} /> {option1}
            <br></br>
            <input type="radio" value={false} name={name} /> {option2}


          </div>          
          { (available === "true") && <input className="label"  onChange= { onChange} type="number"/>}

   </label>
  )
};
