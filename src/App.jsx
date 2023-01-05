import React from "react";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import {Main} from "./components/main_page/Main";
import { OurTeam } from "./components/our_team/OurTeam";


export const App = ()=> {

  return(
  
    <BrowserRouter>
      <Routes>
        <Route exact path = "/"  element={<Main/>}/> 
        <Route  exact path = "/natujenge" element={<OurTeam/>}/> 
        <Route exact path ="/ourteam" element={<OurTeam/>}/>
      </Routes>
      
    </BrowserRouter>
    
  )
}


