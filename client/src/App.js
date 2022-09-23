import React from "react";
import axios from "axios";


export const App = ()=> {

  const [data, setData ] = React.useState("");

  const url = "http://localhost:8080";

  React.useEffect(() => {
    getData();

  }, []);

  const getData =()=>{
    axios.get(`${url}data`)
    .then((response) => {
      const allData = response.data;

      setData(allData);

    })

    .catch((error) => {console.error(`Error: ${error}`)});
  }

  
  if(data.length > 0 ) {

    
      data.map((data)=>{
        return (
          <div >
            This is the client side
            <h1>{data.name}</h1>
        
          </div>
        );
      })
      
    
  }
}


