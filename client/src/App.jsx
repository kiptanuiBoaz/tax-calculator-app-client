import React from "react";
// import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
// import axios from "axios";
import {NavBar} from "./components/navbar/NavBar";
import {Main} from "./components/main_page/Main";
import { OurTeam } from "./components/our_team/OurTeam";


export const App = ()=> {

  // const [data, setData ] = React.useState("");

  // const url = "http://localhost:8080";

  // React.useEffect(() => {
  //   getData();

  // }, []);

  // const getData =()=>{
  //   axios.get(`${url}data`)
  //   .then((response) => {
  //     const allData = response.data;

  //     setData(allData);

  //   })

  //   .catch((error) => {console.error(`Error: ${error}`)});
  // }

  
  // if(data.length > 0 ) {

    
  //     data.map((data)=>{
  //       return (
  //         <div >
  //           This is the client side
  //           <h1>{data.name}</h1>
        
  //         </div>
  //       );
  //     })
      
    
  // }

  return(
    <>
      <NavBar/>
      <Main/>
      <OurTeam/>
    </>
  )
}


