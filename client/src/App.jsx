import React from "react";
import { BrowserRouter as Router ,Routes,Route, BrowserRouter} from "react-router-dom";

import {NavBar} from "./components/navbar/NavBar";
import {Main} from "./components/main_page/Main";
import { OurTeam } from "./components/our_team/OurTeam";


export const App = ()=> {

  return(
  <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
       
        <Main/>
        <OurTeam/>
      </Routes>
      
    </BrowserRouter>
  </>
    
  )
}


