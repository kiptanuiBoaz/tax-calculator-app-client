import React ,{useState} from 'react'

export const RadioInput = ({text,name,onChange,option1, option2, disability}) => {
  const [available, setAvailable] = useState(false);

  const handleAvailability = (event)=>{
    setAvailable(event.target.value);
  
  }
  return (
    <label className="label-radio">
        {text}
        <div >
          <div onChange= {disability ? onChange : handleAvailability}>
            <input type="radio" value={true} name={name} /> {option1}
            <input type="radio" value={false} name={name} /> {option2}
          </div>

          
          { (available === "true") && <input  onChange={ !disability && onChange} type="number"/>}
          
        </div>

   </label>
  )
};