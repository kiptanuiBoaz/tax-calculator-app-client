import React from "react";
import { NavList} from "./NavList";
import  "./nav.css";
import {GiHamburgerMenu} from "react-icons/gi"


export const NavBar = () => {
  return (
    <>
      <div className="navContainer" >
      <p>this is the navbar</p>

        <GiHamburgerMenu className="menu-icon"/>  
         
        <NavList/>  

      </div>
    </>
  )
};
  